/*
  ___
 / __| ___ _ ___ _____
 \__ \/ -_) '_\ V / -_)
 |___/\___|_|  \_/\___|

 You just got served. By a webserver. Because that's what they do ...

*/
let gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    browserSyncReuseTab = require('browser-sync-reuse-tab')(browserSync),
    config = require("../config");

gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: config.root,
    },
    files: [
      config.dev + "/css/**/*.css",
      config.dev + "/scripts/**/*.js",
      config.dev + "/**/*.html"],
    port: config.port,
    open: false
  }, browserSyncReuseTab);
});