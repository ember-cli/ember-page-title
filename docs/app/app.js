import Application from 'ember-strict-application-resolver';
import { entries } from 'ember-page-title/service-registry';

import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    ...entries(),
    ...import.meta.glob('./router.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gts,gjs}', { eager: true }),
  };
}

