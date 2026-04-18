import Application from 'ember-strict-application-resolver';
import { settled } from '@ember/test-helpers';
import { entries } from 'ember-page-title/service-registry';

export default class SsrApp extends Application {
  modules = {
    ...entries(),
    ...import.meta.glob('./router.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gts,gjs}', { eager: true }),
  };
}

export function createSsrApp() {
  const app = SsrApp.create({ autoboot: false });

  const originalVisit = app.visit.bind(app);

  Object.assign(app, {
    visit: async (...args) => {
      const instance = await originalVisit(...args);

      await settled();

      return instance;
    },
  });

  return app;
}
