import Application from 'docs/app';
import config, { enterTestMode } from 'docs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import { setTesting } from '@embroider/macros';

export function start() {
  setTesting(true);
  enterTestMode();
  setApplication(Application.create(config.APP));

  setupEmberOnerrorValidation();

  qunitStart();
}
