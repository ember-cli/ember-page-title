/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let environment = EmberApp.env();
  let isDeploying = environment === 'production';

  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
      includePolyfill: true
    },
    autoImport: isDeploying
      ? {
          publicAssetURL: 'https://ember-cli.github.io/ember-page-title',
        }
      : {},
    fingerprint: {
      extensions: [
        'js',
        'css',
        'png',
        'jpg',
        'gif',
        'map',
        'eot',
        'ttf',
        'woff',
        'woff2',
        'svg',
      ],
      prepend: '/ember-page-title/',
    },
    sassOptions: {
      includePaths: ['app'],
    },
    svg: {
      paths: ['public/assets/images'],
    },
  });
  return app.toTree();
};
