/* jshint node: true */
'use strict';

var TranslateHelperName = require('./lib/plugins/translate-helper-name');

module.exports = {
  name: 'ember-page-title',

  included: function (app) {
    if (app.app) {
      app = app.app;
    }
    this.app = app;
  	
    this._super.included.apply(this, arguments);
  }
};
