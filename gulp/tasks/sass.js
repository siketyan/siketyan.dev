const config = require("../config");
const gulp = require("gulp");
const sass = require("gulp-sass");
const importer = require("node-sass-package-importer");

gulp.task("sass", function () {
    return gulp.src(config.sass.src)
        .pipe(sass({
            importer: importer()
        })).on("error", sass.logError)
        .pipe(gulp.dest(config.sass.dest));
});
