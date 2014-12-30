'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    handleErrors = require('../util/handleErrors');

module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(sass().on('error', handleErrors))
    .pipe(autoprefixer('last 1 version'))
    .on('error', handleErrors)
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
