import Application from '@ember/application';
import Resolver from 'ember-resolver';
import config from "./config/environment";

import setupInspector from "@embroider/legacy-inspector-support/ember-source-4.12";
import compatModules from "@embroider/virtual/compat-modules";

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(compatModules);
  inspector = setupInspector(this);
}

