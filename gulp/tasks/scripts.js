/*
  ___         _      _
 / __| __ _ _(_)_ __| |_ ___
 \__ \/ _| "_| | "_ \  _(_-<
 |___/\__|_| |_| .__/\__/__/
               |_|

 Compile all ES6 in the ./src directory, bundle it and save a
 non-minified version for the local webserver to ./public/js.

*/
let gulp            = require("gulp"),
    gutil           = require("gulp-util"),
    webpack         = require("webpack"),
    webpackStream   = require("webpack-stream"),
    config          = require("../config"),
    scriptManifest  = require("../utils/script-manifest"),
    handleErrors    = require("../utils/handle-errors"),
    manifest        = {};
    srcs            = [],
    webpackConfig   = {};

gulp.task("scripts", (done) => {

  // Determine env
  webpackConfig = process.env.NODE_ENV == "production" ? require("../webpack/webpack.prod.js") : require("../webpack/webpack.dev.js");

  // Get manifest and run webpack against scripts
  getManifest()
    .then( webpackConfig.entry = manifest )
    .then( scripts )
    .then( done );
});

// Get all of our sources and apply Webpack Config ( detects node env )
function scripts(){
  return new Promise(function(resolve, reject) {
    gulp.src(srcs, {since: gulp.lastRun(scripts)} )
      .pipe(webpackStream(webpackConfig, null, (err, stats) => {
          logResults(stats);
          resolve();
        }
      ))
      .on("error", handleErrors)
      .pipe(gulp.dest( config.dev + "/scripts" ))
  })
}

// Get the manifest of scripts
function getManifest(){
  return new Promise(function(resolve, reject) {
    scriptManifest.sources( function( sources ) {
      for( var i = 0; i < sources.length; i++ ){
        let _s = sources[i];
        manifest[_s] = "./" + config.assetPath + "/scripts/" + _s + ".js";
        srcs.push(config.assetPath + "/scripts/" + _s + ".js");
      }
      resolve()
    });
  })
}

// Log out results
function logResults(stats){
  let defaultStatsOptions = {
    colors: gutil.colors.supportsColor,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
  },
  statsOptions = stats || {};

  Object.keys(defaultStatsOptions).forEach( (key) => {
    if (typeof statsOptions[key] === 'undefined') {
      statsOptions[key] = defaultStatsOptions[key];
    }
  });

  gutil.log(stats.toString(statsOptions));
}
