/*

*/

let gulp = require('gulp'),
    rev = require('gulp-rev'),
    config = require('../config');

gulp.task('rev-styles', () => {

  // Styles
  return gulp.src(config.dev + '/css/**/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.prod + "/css/"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.prod + "/css/"));

});