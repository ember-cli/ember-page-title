import Application from 'ember-strict-application-resolver';

import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    './router': import.meta.glob('./router.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gts,gjs}', { eager: true }),
  };
}

