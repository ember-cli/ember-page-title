import Application from 'ember-strict-application-resolver';
import { entries as serviceEntries } from 'ember-page-title/service-registry';
import { entries as templateEntries } from 'ember-page-title/template-registry';
import {
  dependencySatisfies,
  importSync,
  macroCondition,
} from '@embroider/macros';

let setupInspector;
if (macroCondition(dependencySatisfies('ember-source', '>= 4.12.0'))) {
  setupInspector = importSync(
    '@embroider/legacy-inspector-support/ember-source-4.12',
  ).default;
} else if (macroCondition(dependencySatisfies('ember-source', '>= 4.8.0'))) {
  setupInspector = importSync(
    '@embroider/legacy-inspector-support/ember-source-4.8',
  ).default;
} else {
  setupInspector = importSync(
    '@embroider/legacy-inspector-support/ember-source-3.28',
  ).default;
}

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

