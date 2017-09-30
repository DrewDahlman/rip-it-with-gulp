/*
                    _               _       _  __
  __ _ ___ ___  ___| |_   _ __ ___ (_)_ __ (_)/ _|_   _
 / _` / __/ __|/ _ \ __| | '_ ` _ \| | '_ \| | |_| | | |
| (_| \__ \__ \  __/ |_  | | | | | | | | | | |  _| |_| |
 \__,_|___/___/\___|\__| |_| |_| |_|_|_| |_|_|_|  \__, |
                                                  |___/

Minify and compress assets. png, gif, jpg, svg
*/

const gulp      = require("gulp"),
      imagemin  = require("gulp-imagemin"),
      config    = require("../config");

/*
------------------------------------------
| asset-minify:void (-)
------------------------------------------ */
gulp.task("asset-minify", gulp.series(svg));

/*
------------------------------------------
| svg:stream
|
| Minify and compress svg.
------------------------------------------ */
function svg(){
  return gulp.src([ config.assetPath + "/assets/**/*" ])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(config.dev + '/'))
}