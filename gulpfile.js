var gulp = require("gulp");
var browserSync = require("browser-sync");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack-stream");
var waitForPort = require("wait-for-port");
var Server = require("karma").Server;

gulp.task("nodemon", function(cb) {
    var called = false;
    return nodemon({
        ext: "js,jsx",
        ignore: ["public/*"],
        watch: ["app/**/*.js", "app/**/*.jsx"],
        script: "bootstrap.js"
    })
    .on("start", function onStart() {

        if (!called) {
            cb();
        }
        called = true;
    });
});

gulp.task("wait-for-port", function(cb) {
    waitForPort("localhost", 3000, cb);
});

gulp.task("browser-sync", ["nodemon"], function() {
    browserSync({
        proxy: "http://localhost:3000",
        port: 4000,
        logLevel: "debug",
    // open the proxied app in chrome
        browser: ["google-chrome"]
    });
});

gulp.task("js", function() {
    return gulp.src(["app/**/*.jsx", "app/**/*.js"])
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("public/"));
});

gulp.task("bs-reload", ["js"], function() {
    browserSync.reload();
});

gulp.task("default", ["browser-sync"], function() {
    gulp.watch(["app/**/*.jsx", "app/**/*.js", "!public/*"], ["bs-reload"]);
});

gulp.task("test", function(done) {
    new Server({
        configFile: __dirname + "/karma.conf.js",
        singleRun: true
    }, done).start();
});

gulp.task("tdd", function(done) {
    new Server({
        configFile: __dirname + "/karma.conf.js"
    }, done).start();
});
