/*
   ___
  / __|___ _ __ _  _
 | (__/ _ \ "_ \ || |
  \___\___/ .__/\_, |
          |_|   |__/

  Copy the production ready assets to the ./dist folder.

  NOTE: hidden files must be added explicitly to be copied (or use the
  {"dot": true} setting).

*/

let gulp    = require("gulp"),
    del     = require("del"),
    config  = require("../config");

gulp.task("cleanup", () => {

  // Copy tmp into public
  return gulp.src([config.prod + '/**/*'])
  .pipe(gulp.dest(config.dev))
  .on('finish', () => {
    del.sync([
      config.prod,
    ],{ force: true });
  });

});
