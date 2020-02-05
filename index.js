'use strict';

module.exports = {
  name: 'ember-page-title',

  setupPreprocessorRegistry(_, registry) {
    const plugin = this._buildPlugin();

    plugin.parallelBabel = {
      requireFile: __filename,
      buildUsing: '_buildPlugin',
      params: {}
    };

    registry.add('htmlbars-ast-plugin', plugin);
  },

  _buildPlugin() {
    return {
      name: 'translate-title-helper-to-page-title-helper',
      plugin: require('./lib/plugins/translate-helper-name'),
      baseDir() {
        return __dirname;
      }
    };
  }
};
