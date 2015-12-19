'use strict';

const gulp = require('gulp');
const Foso = require('foso');
const js = require('fosify-js');
const less = require('fosify-less');
const path = require('path');

const basePath = path.resolve(__dirname, '../');

gulp.task('build', function(cb) {
  let foso = new Foso();
  foso
    .register([js, less], {
      preset: 'build',
      basePath: basePath,
      ignore: [
        './**/node_modules/**',
        './dist/**',
      ],
    })
    .then(() => foso.bundle())
    .then(cb)
    .catch(cb);
});
