'use strict';

const gulp = require('gulp');
const Foso = require('foso');
const html = require('fosify-html');

gulp.task('templates', require('./assets/tasks/templates'));
gulp.task('resources', ['templates'], require('./assets/tasks/resources'));

gulp.task('html', ['resources'], function(cb) {
  let foso = new Foso();
  foso
    .register([html], {
      src: './src',
      serve: {
        port: 5000,
      },
    })
    .then(() => foso.bundle())
    .then(cb)
    .catch(cb);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['html']);
