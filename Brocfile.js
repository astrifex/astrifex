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

var js = 'src/modules';

js = filterCoffeeScript(js, {
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

js = mergeTrees([js, templateJs]);

js = watchify(js, {
  browserify: {
    entries: ['./index.js'],
    transform: ['browserify-shim']
  },
  outputFile: './astrifex.js',
  cache: env !== 'production'
});

var css = compileSass(['src/styles'], 'app.scss', 'astrifex.css');

var html = pickFiles('src', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/'
});

var fonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap/', {
  srcDir: '/',
  destDir: '/assets/fonts/bootstrap'
});

if (env === 'production') {
  js = ngAnnotate(js);
  js = uglifyJavaScript(js);
  css = csso(css);
}

module.exports = mergeTrees([js,css,html,fonts]);
