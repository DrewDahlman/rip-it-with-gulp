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

gulp.task("cleanup", (done) => {

  // Copy tmp into public
  gulp.src([
    config.prod + '/**/*',
    "!" + config.prod + '/css/*.json',
    "!" + config.prod + '/scripts/*.json'
  ])
  .pipe(gulp.dest(config.dev))
  .on('finish', () => {
    del([ config.prod ]);
    done();
  });

});
