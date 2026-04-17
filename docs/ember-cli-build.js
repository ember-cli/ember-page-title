/* eslint-env node */
'use strict';;
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const {
  compatBuild
} = require("@embroider/compat");

module.exports = async function(defaults) {
  const {
    buildOnce
  } = await import("@embroider/vite");

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
  });
  return compatBuild(app, buildOnce);
};
