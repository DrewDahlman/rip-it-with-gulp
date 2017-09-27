/*
 __      __    _      _    
 \ \    / /_ _| |_ __| |_  
  \ \/\/ / _` |  _/ _| ' \ 
   \_/\_/\__,_|\__\__|_||_|

 Watch ES6, SASS and templates for changes and compile on the fly.

*/

let gulp = require('gulp'),
		config = require('../config');

gulp.task('watch', function(){
  gulp.watch( config.watchPath + '/scripts/**/**/*.js', gulp.parallel('scripts') );
  gulp.watch( config.watchPath + '/styles/**/**/*.sass', gulp.parallel('styles') );
  // gulp.watch( config.watchPath + '/markup/**/**/*.js', gulp.parallel('markup') );
  // gulp.watch( config.watchPath + '/templates/**/**/*.js', gulp.parallel('templates') );
});