'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = async function () {
  const ember4 = {
    '@ember/test-helpers': '^3.2.1',
    '@ember/test-waiters': '^3.0.0',
    'ember-qunit': '^8.0.0',
    'ember-resolver': '^10.0.0',
    'ember-cli': '~4.12.0',
  };
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'minimum-supported-4-2',
        npm: {
          devDependencies: {
            'ember-source': '~4.2.0',
            ...ember4,
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            'ember-source': '~4.4.0',
            'ember-cli': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
            ...ember4,
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
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
    ],
  };
};
