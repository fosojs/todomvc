'use strict';

const gulp = require('gulp');
const hub = require('gulp-hub');
const Foso = require('foso');
const html = require('fosify-html');

gulp.task('develop', function(cb) {
  let foso = new Foso();
  foso
    .register([html], {
      basePath: __dirname,
      serve: {
        port: 5000,
      },
      watch: true,
      livereload: {
        port: 50123,
      },
    })
    .then(() => foso.bundle())
    .then(cb)
    .catch(cb);
});

gulp.task('default', ['develop']);

hub(['assets/gulpfile.js', 'gulpfile.js']);
