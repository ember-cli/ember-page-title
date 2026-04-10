'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'minimum-supported-4-2',
        npm: {
          devDependencies: {
            'ember-source': '~4.2.0',
            'ember-cli': '~4.12.0',
            '@glimmer/component': '1.1.2',
            'ember-qunit': '^7.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-cli': '~4.12.0',
            '@glimmer/component': '1.1.2',
            'ember-qunit': '^7.0.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
            'ember-cli': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0',
            'ember-cli': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
            'ember-cli': '^6.10.0',
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
            'ember-cli': '^6.10.0',
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
            'ember-cli': '^6.10.0',
          },
        },
      },
    ],
  };
};
