/*
   ___ _
  / __| |___ __ _ _ _
 | (__| / -_) _` | " \
  \___|_\___\__,_|_||_|

 Get rid of everything Gulp generates. You can see the stripes ...

*/

let gulp    = require("gulp"),
    del     = require("del"),
    config  = require("../config");

gulp.task("clean", (done) => {
  del([ config.dev ]);
  done();
});
