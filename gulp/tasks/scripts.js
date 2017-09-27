/*
  ___         _      _
 / __| __ _ _(_)_ __| |_ ___
 \__ \/ _| '_| | '_ \  _(_-<
 |___/\__|_| |_| .__/\__/__/
               |_|

 Compile all ES6 in the ./src directory, bundle it and save a
 non-minified version for the local webserver to ./public/js.

*/
let gulp 						= require('gulp'),
		webpack 				= require('webpack'),
		webpackStream 	= require('webpack-stream'),
		config 					= require('../config'),
    scriptManifest 	= require('../utils/script-manifest'),
    handleErrors    = require('../utils/handle-errors'),
    manifest 				= {};
    srcs 						= [],
    webpackConfig 	= {};

gulp.task('scripts', (done) => {

	// Determine env
	webpackConfig = process.env.NODE_ENV == "production" ? require('../webpack/webpack.prod.js') : require('../webpack/webpack.dev.js');
	webpackConfig.entry = manifest;

	// Get manifest and run webpack against scripts
	return getManifest().then( function(){ scripts() });
});

// Get all of our sources and apply Webpack Config ( detects node env )
function scripts(){
	return gulp.src(srcs)
    .pipe(webpackStream(webpackConfig))
    .on('error', handleErrors)
    .pipe(gulp.dest( config.dev + '/scripts' ));
}

// Get the manifest of scripts
function getManifest(){
	return new Promise(function(resolve, reject) {
		scriptManifest.sources( function( sources ) {
			for( var i = 0; i < sources.length; i++ ){
				let _s = sources[i];
				manifest[_s] = './' + config.assetPath + '/scripts/' + _s + '.js';
				srcs.push(config.assetPath + '/scripts/' + _s + '.js');
			}
			resolve()
		});
	})
}
