'use strict';

const gulp = require('gulp');

const destination = './dist/';

gulp.task('templates', require('./tasks/templates'));
gulp.task('resources', ['templates'], require('./tasks/resources'));

gulp.task('vendors', function() {
  gulp.src([
    destination + 'assets/**/*',
    'bower_components/html5shiv/dist/html5shiv.js'
  ])
    .pipe(gulp.dest(destination));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('img/**/*', ['images']);
  gulp.watch('js/templates/**/*.html', ['templates']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['templates', 'resources', 'vendors']);
