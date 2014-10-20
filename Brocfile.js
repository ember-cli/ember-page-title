var compileES6 = require('broccoli-es6-concatenator');
var mergeTrees = require('broccoli-merge-trees');
var uglifyJs = require('broccoli-uglify-js');
var Funnel = require('broccoli-funnel');

var lib = compileES6(mergeTrees(['lib', 'bower_components/loader.js']), {
  loaderFile: 'loader.js',
  inputFiles: [
    '**/*.js'
  ],
  ignoredModules: ['ember'],
  wrapInEval: false,
  outputFile: '/document-title.js'
});

var amd = compileES6('lib', {
  inputFiles: [
    '**/*.js'
  ],
  ignoredModules: ['ember'],
  wrapInEval: false,
  outputFile: '/document-title.amd.js'
});

var uglify = function (tree, filename) {
  var minFilename = filename.split('.');
  minFilename.pop();
  minFilename.push('min', 'js');
  return uglifyJs(new Funnel(tree, {
    destDir: '/',
    getDestinationPath: function (relativePath) {
      if (relativePath === filename) {
        return minFilename.join('.');
      }
      return relativePath;
    }
  }));
}

module.exports = mergeTrees([
  lib,
  uglify(lib, 'document-title.js'),
  amd,
  uglify(amd, 'document-title.amd.js')
]);
