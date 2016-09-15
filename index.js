/* jshint node: true */
'use strict';

var TranslateHelperName = require('./lib/plugins/translate-helper-name');

module.exports = {
  name: 'ember-page-title',

  setupPreprocessorRegistry: function (type, registry) {
    this._super.setupPreprocessorRegistry.apply(this, arguments);

    app.registry.add('htmlbars-ast-plugin', {
      name: 'translate-title-helper-to-page-title-helper',
      plugin: TranslateHelperName,
      baseDir: function() {
        return __dirname;
      }
    });
  }
};
