'use strict';

var gulp = require('gulp'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    browserifyShim = require('browserify-shim'),
    coffeeify = require('coffeeify'),
    handleErrors = require('../util/handleErrors');

module.exports = gulp.task('watchify', function () {
  var bundler = watchify({
    entries: [config.paths.src.modules],
    extensions: ['.coffee']
  }, watchify.args);

  bundler.transform(coffeeify);
  bundler.transform(browserifyShim);

  bundler.on('update', rebundle);

  function rebundle() {
    return bundler.bundle({ debug: true })
      .on('error', handleErrors)
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
