/*


*/

let gulp = require('gulp'),
    rev = require('gulp-rev'),
    config = require('../config');

gulp.task('rev-scripts', () => {

  // JS
  return gulp.src(config.dev + '/scripts/**/*.js')
    .pipe(rev())
    .pipe(gulp.dest(config.prod + "/scripts/"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.prod + "/scripts/"));

});