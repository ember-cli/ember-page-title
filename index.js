/* jshint node: true */
'use strict';

var TransformComponentToHelper = require('./lib/plugins/transform-component-to-helper');

module.exports = {
  name: 'ember-document-title',

  included: function () {
    this._super.included.apply(this, arguments);

    this.app.registry.add('htmlbars-ast-plugin', {
      name: 'transform-document-title-component-to-title-helper',
      plugin: TransformComponentToHelper
    });
  }
};
