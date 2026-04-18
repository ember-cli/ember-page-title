const config = {
  environment: import.meta.env.DEV ? 'development' : 'production',
  rootURL: '/',
  locationType: 'history',
  EmberENV: {} as Record<string, unknown>,
  APP: {} as Record<string, unknown>,
};

export default config;

export function enterTestMode() {
  config.locationType = 'none';
  config.APP.rootElement = '#ember-testing';
  config.APP.autoboot = false;
}
