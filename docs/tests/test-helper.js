import Application from 'docs/app';
import config from 'docs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';

setApplication(Application.create(config.APP));

if (macroCondition(dependencySatisfies('ember-qunit', '>= 9.0.0'))) {
  const { loadTests } = importSync('ember-qunit/test-loader');
  const { setupEmberOnerrorValidation } = importSync('ember-qunit');

  setupEmberOnerrorValidation();
  loadTests();
}

start();
