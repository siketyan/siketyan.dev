const config = require("../config");
const gulp = require("gulp");

gulp.task("font-awesome", () =>
    gulp.src(config.fontAwesome.src)
        .pipe(gulp.dest(config.fontAwesome.dest))
);
