import Application from 'ember-strict-application-resolver';
import Resolver from 'ember-resolver';
import config from "./config/environment";

import setupInspector from "@embroider/legacy-inspector-support/ember-source-4.12";
import compatModules from "@embroider/virtual/compat-modules";

export default class App extends Application {
  inspector = setupInspector(this);
  modules = {
    './router': import.meta.glob('./router.js', { eager: true }),
    ...import.meta.glob('./routes/**/*.js', { eager: true }),
    ...import.meta.glob('./templates/**/*.{gts,gjs,hbs}', { eager: true }),
  };
}

