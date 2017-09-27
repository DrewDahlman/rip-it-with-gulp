/*
  ___  _    _   
 |   \(_)__| |_ 
 | |) | (_-<  _|
 |___/|_/__/\__|

 This cool task exists so that build can run when clean is finished.

 Note this task should only be run on the server for deploy and the dev theme should be removed with a post deploy hook.

*/

let gulp = require('gulp');

gulp.task('build', (done) => {
  process.env.NODE_ENV = 'production';
  gulp.parallel('scripts', 'styles');
	done();
});

gulp.task('dist', gulp.series('clean', gulp.parallel('build')));