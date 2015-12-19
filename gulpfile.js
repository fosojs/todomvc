'use strict';

const gulp = require('gulp');
const ejs = require('gulp-ejs');
const hub = require('gulp-hub');
const gutil = require('gulp-util');
const webserver = require('gulp-webserver');

const destination = './dist';

function render(model) {
  gulp.src('./views/*.ejs')
    .pipe(ejs(model).on('error', gutil.log))
    .pipe(gulp.dest(destination));
}

gulp.task('publish', function() {
  render({
    cdnOrigin: 'http://cdn.foso.me',
  });
});

gulp.task('develop', function() {
  render({
    cdnOrigin: 'http://localhost:9595',
  });

  gulp.src(destination)
    .pipe(webserver({
      livereload: true,
      open: true,
    }));
});

gulp.task('default', ['develop']);

hub(['assets/gulpfile.js', 'gulpfile.js']);
