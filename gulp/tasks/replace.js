/*


*/

let gulp = require('gulp'),
    revReplace = require('gulp-rev-replace'),
    config = require('../config');

gulp.task('replace', () => {

  let scripts_manifest = gulp.src(config.prod + "/scripts/rev-manifest.json");
  let css_manifest = gulp.src(config.prod + "/css/rev-manifest.json");

  return gulp.src([config.dev + "/*.html"])
    .pipe(revReplace({manifest: scripts_manifest}))
    .pipe(revReplace({manifest: css_manifest}))
    .pipe(gulp.dest(config.prod));

});