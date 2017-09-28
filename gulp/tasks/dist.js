/*
  ___  _    _
 |   \(_)__| |_
 | |) | (_-<  _|
 |___/|_/__/\__|

 Run this to compile final

*/

let gulp = require("gulp");

// Dist process
gulp.task("dist", gulp.series("clean", "styles", "scripts", "markup", "copy", "rev-scripts", "rev-styles", "replace", "cleanup"));

