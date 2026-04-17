import { setTesting } from '@embroider/macros';

const config = {
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'history',
  EmberENV: {},
  APP: {},
};

export default config;

export function enterTestMode() {
  setTesting(true);

  config.locationType = 'none';
  config.APP.rootElement = '#ember-testing';
  config.APP.autoboot = false;
}
