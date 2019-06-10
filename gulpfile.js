const gulp = require("gulp");
const requireDir = require('require-dir');

requireDir('./gulp/tasks', {
    recurse: true
});

gulp.task("build", gulp.series(
    "pug",
    "webpack",
    "sass",
    "font-awesome",
    "assets"
));
