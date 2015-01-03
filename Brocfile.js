var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript = require('broccoli-coffee');
var uglifyJavaScript = require('broccoli-uglify-js');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var browserify = require('broccoli-browserify');
var html2js = require('broccoli-html2js');
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

if (env === 'production') {
  js = uglifyJavaScript(js);
}

var css = compileSass(['src/styles'], 'app.scss', 'astrifex.css');

var html = pickFiles('src', {
  srcDir: '/',
  files: ['index.html'],
  destDir: '/'
});

module.exports = mergeTrees([js,css,html]);
