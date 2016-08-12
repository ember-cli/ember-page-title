/* jshint node: true */
'use strict';

var TranslateHelperName = require('./lib/plugins/translate-helper-name');

module.exports = {
  name: 'ember-page-title',

  included: function () {
    this._super.included.apply(this, arguments);

    // Do not add ast conversion in addons/engines
    // This means that inside of addons/engines, you can only use {{page-title}}, not {{title}}
    var app = this.app;
    if (typeof app !== 'undefined' && typeof app.registry !== 'undefined') {
      app.registry.add('htmlbars-ast-plugin', {
        name: 'translate-title-helper-to-page-title-helper',
        plugin: TranslateHelperName,
        baseDir: function() {
          return __dirname;
        }
      });
    }
  }
};
