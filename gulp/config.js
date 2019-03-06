const src = "./src";
const dest = "./dist";

module.exports = {
    src: src,
    dest: dest,
    pug: {
        src: src + "/pug/*.pug",
        basedir: src,
        pretty: true
    },
    js: {
        src: src + "/js/*.js",
        dest: dest + "/js",
        uglify: false
    },
    webpack: {
        mode: "development",
        entry: src + "/js/app.js",
        output: {
            filename: "bundle.js"
        }
    },
    sass: {
        src: src + "/sass/*.scss",
        dest: dest + "/css"
    },
    fontAwesome: {
        src: "./node_modules/@fortawesome/fontawesome-free/webfonts/**",
        dest: dest + "/webfonts"
    }
};