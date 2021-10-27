/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let environment = EmberAddon.env();
  let isDeploying = environment === 'production';

  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: true,
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
      includePaths: ['tests/dummy/app'],
    },
    svg: {
      paths: ['tests/dummy/public/assets/images'],
    },
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticComponents: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
