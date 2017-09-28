/*

*/

let gulp         = require("gulp"),
    fs           = require('fs'),
    mustache     = require("gulp-mustache"),
    config       = require("../config");

gulp.task("markup", function buildHTML() {
  return gulp.src(config.assetPath + "/markup/*.mustache")
  .pipe(mustache(config.meta, {
    extension: ".html"
  }))
  .pipe(gulp.dest( config.dev ))
});
