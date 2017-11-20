'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-chaincoin');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
