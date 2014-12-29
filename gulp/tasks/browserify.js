'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserifyShim = require('browserify-shim');
var coffeeify = require('coffeeify');

module.exports = gulp.task('browserify', function () {
  return browserify({
      entries: [config.paths.src.modules],
      extensions: ['.coffee']
    })
    .transform(coffeeify)
    .transform(browserifyShim)
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
