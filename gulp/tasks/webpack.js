const config = require("../config");
const gulp = require("gulp");
const webpack = require("webpack-stream");

gulp.task("webpack", () =>
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe(gulp.dest(config.js.dest))
);
