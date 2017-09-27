/*
  ___  _    _
 |   \(_)__| |_
 | |) | (_-<  _|
 |___/|_/__/\__|

 This cool task exists so that build can run when clean is finished.

 Note this task should only be run on the server for deploy and the dev theme should be removed with a post deploy hook.

*/

let gulp = require('gulp');
let args = process.argv.slice(2);

// Check for production flags
process.env.NODE_ENV = args[1] === "-e" && args[2] === "production" ? 'production' : 'development';

// Dist process
gulp.task('dist', gulp.series('clean', gulp.parallel('styles','scripts')));
