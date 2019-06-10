const config = require("../config");
const gulp = require("gulp");

gulp.task("assets", () =>
    gulp.src(config.assets.src)
        .pipe(gulp.dest(config.assets.dest))
);
