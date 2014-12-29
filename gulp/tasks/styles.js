'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');


function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}


module.exports = gulp.task('styles', function () {
  return gulp.src(config.paths.src.styles)
    .pipe(gulpif(release, sass().on('error', handleError), sass(/*{sourcemap: true, sourcemapPath: '../src/styles'}*/).on('error', handleError)))
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
