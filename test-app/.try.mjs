// When building your addon for older Ember versions you need to have the required files
const compatFiles = {
  'ember-cli-build.cjs': `const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { compatBuild } = require('@embroider/compat');
module.exports = async function (defaults) {
  const { buildOnce } = await import('@embroider/vite');
  let app = new EmberApp(defaults);
  return compatBuild(app, buildOnce);
};`,
  'config/optional-features.json': JSON.stringify({
    'application-template-wrapper': false,
    'default-async-observers': true,
    'jquery-integration': false,
    'template-only-glimmer-components': true,
    'no-implicit-route-model': true,
  }),
};

  const ember4 = {
    '@ember/test-helpers': '^5.0.0',
    '@ember/test-waiters': '^3.1.0',
    '@embroider/compat': '^4.0.3',
    'ember-qunit': '^9.0.0',
    'ember-cli': '~4.12.0',
  };

const compatDeps = {
  '@embroider/compat': '^4.0.3',
  'ember-cli': '^5.12.0',
  'ember-auto-import': '^2.10.0',
  '@ember/optional-features': '^2.2.0',
};

export default {
  scenarios: [
    {
      name: 'min-supported',
      'allow-failure': false,
      npm: {
        devDependencies: {
          'ember-source': '~4.2.0',
          ...compatDeps,
          ...ember4,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-4.12',
      'allow-failure': false,
      npm: {
        devDependencies: {
          'ember-source': '~4.12.0',
          ...compatDeps,
          ...ember4,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: 'ember-lts-5.12',
      'allow-failure': false,
      npm: {
        devDependencies: {
          'ember-source': '~5.12.0',
          ...compatDeps,
        },
      },
      env: {
        ENABLE_COMPAT_BUILD: true,
      },
      files: compatFiles,
    },
    {
      name: `ember-lts-6.4`,
      'allow-failure': false,
      npm: {
        devDependencies: {
          'ember-source': `npm:ember-source@~6.4.0`,
        },
      },
    },
    {
      name: `ember-latest`,
      'allow-failure': false,
      npm: {
        devDependencies: {
          'ember-source': `npm:ember-source@latest`,
        },
      },
    },
    {
      name: `ember-beta`,
      'allow-failure': true,
      npm: {
        devDependencies: {
          'ember-source': `npm:ember-source@beta`,
        },
      },
    },
    {
      name: `ember-alpha`,
      'allow-failure': true,
      npm: {
        devDependencies: {
          'ember-source': `npm:ember-source@alpha`,
        },
      },
    },
  ],
};
