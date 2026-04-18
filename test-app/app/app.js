import Application from 'ember-strict-application-resolver';
import { entries as serviceEntries } from 'ember-page-title/service-registry';
import { entries as templateEntries } from 'ember-page-title/template-registry';

import setupInspector from "@embroider/legacy-inspector-support/ember-source-4.12";

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    ...serviceEntries(),
    ...templateEntries(),
    ...import.meta.glob('./router.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gts,gjs,hbs}', { eager: true }),
  };
}

