'use strict';

const gulp = require('gulp');
const dotify = require('gulp-dotify');
const header = require('gulp-header');
const footer = require('gulp-footer');
const concat = require('gulp-concat');
const path = require('path');

const destination = path.resolve(__dirname, '../dist');

module.exports = function() {
  gulp.src('./js/templates/**/*.html')
    .pipe(dotify({
      separator: '/',
      root: 'templates',
    }))
    .pipe(concat('templates.js'))
    .pipe(header('var JST = {};'))
    .pipe(footer('module.exports = JST;'))
    .pipe(gulp.dest(destination));
};
