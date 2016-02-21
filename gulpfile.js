var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-stream');
var waitForPort = require('wait-for-port');


var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({

    ext: 'jsx',
    watch: ['components'],
    script: 'bootstrap.js'
  })
    .on('start', function onStart() {
      // ensure start only got called once
      console.log('start');
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
  // for more browser-sync config options: http://www.browsersync.io/docs/options/
  browserSync({

    // informs browser-sync to proxy our expressjs app which would run at the following location
    proxy: 'http://localhost:3000',

    // informs browser-sync to use the following port for the proxied app
    // notice that the default port is 3000, which would clash with our expressjs
    port: 4000,
    logLevel: 'debug',
    // open the proxied app in chrome
    browser: ['google-chrome']
  });
});

gulp.task('js',  function () {
  return gulp.src('components/**/*.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/'))
});

gulp.task('bs-reload', ['wait-for-port'], function () {
  browserSync.reload();
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch('components/**/*.jsx',   ['js', 'bs-reload']);
});
