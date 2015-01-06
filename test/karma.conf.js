module.exports = function (config) {
  config.set({
    basePath: '../',

    files: [
      // XXX: Revisit this nasty hack...
      process.env.TRAVIS ? 'release/astrifex.js' : 'build/astrifex.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'test/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    browsers: ['PhantomJS']
  });
};
