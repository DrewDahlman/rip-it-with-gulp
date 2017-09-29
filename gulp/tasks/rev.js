/*
 _ __ _____   __
| '__/ _ \ \ / /
| | |  __/\ V /
|_|  \___| \_/

Creates a rev'd version of files.

*/

let gulp = require('gulp'),
    rev = require('gulp-rev'),
    config = require('../config');

/*
------------------------------------------
| rev:void (-)
------------------------------------------ */
gulp.task('rev', gulp.series(revScripts, revStyles));

/*
------------------------------------------
| revScripts:stream
|
| Revs scripts.
------------------------------------------ */
function revScripts(){
  return gulp.src(config.dev + '/scripts/*.js')
    .pipe(rev())
    .pipe(gulp.dest(config.prod + "/scripts/"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.prod + "/scripts/"));
}

/*
------------------------------------------
| revStyles:stream
|
| Revs styles.
------------------------------------------ */
function revStyles(){
  return gulp.src(config.dev + '/css/*.css')
    .pipe(rev())
    .pipe(gulp.dest(config.prod + "/css/"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.prod + "/css/"));
}