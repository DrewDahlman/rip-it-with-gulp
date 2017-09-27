/*
   ___ _
  / __| |___ __ _ _ _
 | (__| / -_) _` | ' \
  \___|_\___\__,_|_||_|

 Get rid of everything Gulp generates. You can see the stripes ...

*/

var gulp  = require('gulp'),
    del = require('del');

var config = require('../config');

gulp.task('clean', (done) => {
  del.sync([
    config.dev
  ],{ force: true });
  done();
});
