/*
     _            _
  __| | ___ _ __ | | ___  _   _
 / _` |/ _ \ '_ \| |/ _ \| | | |
| (_| |  __/ |_) | | (_) | |_| |
 \__,_|\___| .__/|_|\___/ \__, |
           |_|            |___/

Push up to s3!

Make sure you have your credentials stored locally in ~/.aws/credentials and have your identity added.

*/
let gulp    = require("gulp"),
    AWS     = require("aws-sdk"),
    fs      = require("fs"),
    path    = require("path"),
    mime    = require("mime"),
    config  = require("../config");

/*
------------------------------------------
| deploy:void (-)
------------------------------------------ */
gulp.task("deploy", gulp.series("dist", aws));

/*
------------------------------------------
| aws:stream (-)
|
| Deploy project to s3.
------------------------------------------ */
function aws(done){

  // Set the identity
  AWS.config.credentials = new AWS.SharedIniFileCredentials({
    profile: config.aws.identity
  });

  // For dev purposes only
  AWS.config.update({
    region: config.aws.region
  });

  // S3
  s3 = new AWS.S3();
  emptyBucket(function(){
    console.log("Clean Complete");
    fillBucket();
  });
  done();
}

/*
------------------------------------------
| emptyBucket:void (-)
|
| Empty the bucket.
------------------------------------------ */
function emptyBucket(callback){
  var params = {
    Bucket: config.aws.bucket,
    Prefix: ""
  };

  // Clear Everything out
  s3.listObjects(params, function(err, data) {
    if (err) console.log(err);
    if (data.Contents.length == 0) callback();

    params = {Bucket: config.aws.bucket};
    params.Delete = {Objects:[]};

    data.Contents.forEach(function(content) {
      params.Delete.Objects.push({Key: content.Key});
    });

    s3.deleteObjects(params, function(err, data) {
      callback();
    });
  });
}

/*
------------------------------------------
| fillBucket:void (-)
|
| Upload files to the bucket.
| Loop over all files in directory if a folder
| Upload directly, if file upload to partent directory.
------------------------------------------ */
function fillBucket(){
  fs.readdir( config.dev, function(err, files) {
    files.forEach( function(file) {
      if( path.extname(file) != "" ){
        upload(config.dev, config.dev + "/" + file);
      } else {
        var params = {
          Bucket: config.aws.bucket,
          Prefix: config.dev.replace(config.dev + "/", ""),
          Key: "",
          Body: "",
          ACL: "public-read"
        }
        s3.putObject(params, function(){
          parseDir( config.dev + "/" + file);
        });
      }
    });
  });
}

/*
------------------------------------------
| parseDir:void (-)
|
| Recursive function to go over files in directories.
------------------------------------------ */
function parseDir( dir ){
  fs.readdir( dir, function(err, files) {
    files.forEach( function(file) {
      if( path.extname(file) != "" ){
        upload(dir, dir + "/" + file);
      } else {
        var params = {
          Bucket: config.aws.bucket,
          Prefix: dir.replace(dir + "/", ""),
          Key: "",
          Body: "",
          ACL: "public-read"
        }
        s3.putObject(params, function(){
          parseDir( dir + "/" + file);
        });
      }
    });
  });
}

/*
------------------------------------------
| upload:void (-)
|
| Upload files.
------------------------------------------ */
function upload(dir, file ){
  var params = {
    Bucket: config.aws.bucket + dir.replace(config.dev, ""),
    Key: "",
    Body: "",
    ACL: "public-read",
    ContentType: mime.lookup(file)
  }

  var fileStream = fs.createReadStream(file);
  fileStream.on("error", function(err) {
    console.log("File Error", err);
  });

  file = file.replace(config.dev + "/", "");
  params.Body = fileStream;
  params.Key = path.basename(file);
  s3.upload (params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } if (data) {
      console.log("Upload Success", data.Location);
    }
  });
}