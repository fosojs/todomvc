'use strict';

const gulp = require('gulp');

gulp.task('templates', require('./tasks/templates'));
gulp.task('resources', ['templates'], require('./tasks/resources'));

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['templates', 'resources']);
