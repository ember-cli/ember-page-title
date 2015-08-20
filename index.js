/* jshint node: true */
'use strict';

var TranslateHelperName = require('./lib/plugins/translate-helper-name');

module.exports = {
  name: 'ember-document-title',

  included: function () {
    this._super.included.apply(this, arguments);

    this.app.registry.add('htmlbars-ast-plugin', {
      name: 'translate-title-helper-to-page-title-helper',
      plugin: TranslateHelperName
    });
  }
};
