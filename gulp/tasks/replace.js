/*
                _
 _ __ ___ _ __ | | __ _  ___ ___
| '__/ _ \ '_ \| |/ _` |/ __/ _ \
| | |  __/ |_) | | (_| | (_|  __/
|_|  \___| .__/|_|\__,_|\___\___|
         |_|

Replaces references in static html files. Basically magic.

*/

let gulp = require('gulp'),
    revReplace = require('gulp-rev-replace'),
    config = require('../config');

/*
------------------------------------------
| rev:void (-)
------------------------------------------ */
gulp.task('replace', gulp.series(replaceRefs));

/*
------------------------------------------
| replace:stream
|
| Replaces all references to rev'd files in
| static compiled html.
------------------------------------------ */
function replaceRefs(){
  let scripts_manifest = gulp.src(config.prod + "/scripts/rev-manifest.json");
  let css_manifest = gulp.src(config.prod + "/css/rev-manifest.json");

  return gulp.src([config.dev + "/*.html"])
    .pipe(revReplace({manifest: scripts_manifest}))
    .pipe(revReplace({manifest: css_manifest}))
    .pipe(gulp.dest(config.prod));
}