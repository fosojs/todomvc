'use strict';

const gulp = require('gulp');
const hub = require('gulp-hub');
const Foso = require('foso');
const html = require('fosify-html');

gulp.task('html', function(cb) {
  let foso = new Foso();
  foso
    .register([html], {
      src: './',
      ignore: [
        './**/node_modules/**',
      ],
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

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['html']);

hub(['assets/gulpfile.js', 'gulpfile.js']);
