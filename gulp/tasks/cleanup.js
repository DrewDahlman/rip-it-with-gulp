/*
      _
  ___| | ___  __ _ _ __    _   _ _ __
 / __| |/ _ \/ _` | '_ \  | | | | '_ \
| (__| |  __/ (_| | | | | | |_| | |_) |
 \___|_|\___|\__,_|_| |_|  \__,_| .__/
                                |_|

  Final housekeeping before dist is complete.
  Cleans out the tmp directory that was made during dist and any leftover files.

*/

let gulp    = require("gulp"),
    del     = require("del"),
    config  = require("../config");

/*
------------------------------------------
| cleanup:void (-)
------------------------------------------ */
gulp.task("cleanup", gulp.series(destroy));

/*
------------------------------------------
| destroy:destruction (-)
|
| Copies everything from TMP while disting,
| but leaves any manifests and other junk.
|
| Once moved delete the directory.
------------------------------------------ */
function destroy(done){
  gulp.src([
    config.prod + '/**/*',
    '!' + config.prod + '/**/*.json'
  ])
  .pipe(gulp.dest(config.dev))
  .on('finish', () => {
    del([ config.prod ]);
    done();
  });
}

