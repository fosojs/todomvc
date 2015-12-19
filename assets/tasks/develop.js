'use strict';

const gulp = require('gulp');
const Foso = require('foso');
const js = require('fosify-js');
const less = require('fosify-less');
const Server = require('foso-cdn').Server;
const path = require('path');

const basePath = path.resolve(__dirname, '../');

gulp.task('develop', function(cb) {
  let foso = new Foso();
  foso
    .register([js, less], {
      preset: 'develop',
      basePath: basePath,
    })
    .then(() => foso.bundle())
    .then(function() {
      let server = new Server({
        src: basePath,
      });
      return server.start();
    })
    .then(cb)
    .catch(cb);
});
