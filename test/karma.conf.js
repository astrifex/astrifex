module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      'release/astrifex.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS']
  });
};
