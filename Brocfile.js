var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript = require('broccoli-coffee');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var watchify = require('broccoli-watchify');
var html2js = require('broccoli-html2js');
var ngAnnotate = require('broccoli-ng-annotate');
var csso = require('broccoli-csso');
var env = require('broccoli-env').getEnv();

var appJs = 'src/modules';

appJs = filterCoffeeScript(appJs, {
  bare: true
});

var templates = pickFiles('src/modules', {
  srcDir: '/',
  files: ['**/*.html'],
  destDir: '/'
});

var templateJs = html2js(templates, {
  inputFiles: ['**/*.html'],
  outputFile: '/templates.js',
  module: 'astrifex.templates',
  singleModule: true,
  fileHeaderString: 'module.exports = ',
  htmlmin: { collapseWhitespace: true }
});

appJs = mergeTrees([appJs, templateJs]);

appJs = watchify(appJs, {
  browserify: {
    entries: ['./index.js'],
    transform: ['browserify-shim']
  },
  outputFile: './astrifex.js',
  cache: env !== 'production'
});

var vendorCss = compileSass(['src/styles'], 'vendor.scss', 'vendor.css');
var appCss = compileSass(['src/styles'], 'app.scss', 'astrifex.css');

var html = pickFiles('src', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/'
});

var js = mergeTrees([appJs]);
var css = mergeTrees([appCss,vendorCss]);
if (env === 'production') {
  js = uglifyJavaScript(ngAnnotate(js));
  css = csso(css);
}

module.exports = mergeTrees([js,css,html]);
