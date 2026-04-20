import Application from 'ember-strict-application-resolver';
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
  return SsrApp.create({ autoboot: false });
}
