/*
  ___ _        _
 / __| |_ _  _| |___ ___
 \__ \  _| || | / -_|_-<
 |___/\__|\_, |_\___/__/
          |__/

 Compile all SASS in the ./src/styles directory, autoprefix it and save a
 non-minified version for the local webserver to ./public/css.

*/
let gulp            = require("gulp"),
    path            = require("path"),
    sass            = require("gulp-sass"),
    autoprefixer    = require("gulp-autoprefixer"),
    sassLint        = require("gulp-sass-lint"),
    cleanCSS        = require('gulp-clean-css'),
    sourcemaps      = require('gulp-sourcemaps'),
    handleErrors    = require("../utils/handle-errors"),
    config          = require("../config");

gulp.task("styles", function(done) {

  // Lint, Autoprefix & process
  gulp.src( config.assetPath + "/styles/**/*.sass")
    .pipe(sassLint({
      options: {
        configFile: path.resolve(__dirname,"..","..") + "/.sass-lint.yml",
        formatter: "stylish"
      }
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass({"style": "expanded"}))
    .on("error", handleErrors)
    .pipe(autoprefixer({
      "browsers": ["> 0.5%", "last 2 versions", "Firefox ESR", "Opera 12.1"],
      "cascade": false
    }))
    .pipe(gulp.dest( config.dev + "/css"))
    .on('finish', () => {
      complete(done)
    });
});

function complete(done){
  if( process.env.NODE_ENV == "production" ){
    gulp.src(config.dev + '/css/*.css')
      .pipe(sourcemaps.init())
      .pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dev + '/css'))
      .on('finish', () => {
        done();
      });
  } else {
    done();
  }
}
