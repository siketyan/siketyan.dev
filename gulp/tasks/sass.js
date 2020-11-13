const config = require("../config");
const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require('sass');

gulp.task("sass", function () {
    return gulp.src(config.sass.src)
        .pipe(sass()).on("error", sass.logError)
        .pipe(gulp.dest(config.sass.dest));
});
