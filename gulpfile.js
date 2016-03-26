var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-stream');
var waitForPort = require('wait-for-port');


var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    ext: 'js,jsx',
    ignore: ['public/*'],
    watch: ['**/*.js', '**/*.jsx'],
    script: 'bootstrap.js'
  })
    .on('start', function onStart() {

      if (!called) {
        cb();
      }
      called = true;
    });
});

gulp.task('wait-for-port', function(cb) {
  waitForPort('localhost', 3000, cb);
});

gulp.task('browser-sync', ['wait-for-port', 'nodemon'], function () {
  browserSync({
    proxy: 'http://localhost:3000',
    port: 4000,
    logLevel: 'debug',
    // open the proxied app in chrome
    browser: ['google-chrome']
  });
});

gulp.task('js',  function () {
  return gulp.src(['**/*.jsx', '**/*.js'])
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'))
});

gulp.task('bs-reload', ['wait-for-port', 'js'], function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(['**/*.jsx', '**/*.js', '!public/*'],   ['bs-reload']);
});
