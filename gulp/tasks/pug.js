const config = require("../config");
const gulp = require("gulp");
const pug = require("gulp-pug");

gulp.task("pug", () =>
    gulp.src(config.pug.src)
        .pipe(pug(config.pug))
        .pipe(gulp.dest(config.dest))
);
