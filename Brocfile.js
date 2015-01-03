var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript = require('broccoli-coffee');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var browserify = require('broccoli-browserify');
var html2js = require('broccoli-html2js');
var ngAnnotate = require('broccoli-ng-annotate');
var csso = require('broccoli-csso');
var env = require('broccoli-env').getEnv();

var js = 'src/modules';

js = filterCoffeeScript(js, {
  bare: true
});

var templateJs = html2js('src/modules', {
  inputFiles: ['**/*.html'],
  outputFile: '/templates.js',
  fileHeaderString: 'module.exports = ',
  htmlmin: { collapseWhitespace: true }
});

js = mergeTrees([js, templateJs]);

js = browserify(js, {
  entries: ['./index.js'],
  outputFile: './astrifex.js',
  transform: ['browserify-shim']
});

var css = compileSass(['src/styles'], 'app.scss', 'astrifex.css');

var html = pickFiles('src', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/'
});

if (env === 'production') {
  js = ngAnnotate(js);
  js = uglifyJavaScript(js);
  css = csso(css);
}

module.exports = mergeTrees([js,css,html]);
