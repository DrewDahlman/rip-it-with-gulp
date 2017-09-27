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
    handleErrors    = require("../utils/handle-errors"),
    config          = require("../config");

gulp.task("styles", function() {

  // Lint, Autoprefix & process
  return gulp.src( config.assetPath + "/styles/**/*.sass")
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
    .pipe(gulp.dest( config.dev + "/css"));
});
