import Application from 'test-app/app';
import config, { enterTestMode } from 'test-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';

export function start() {
  enterTestMode();
  setApplication(Application.create(config.APP));

  setupEmberOnerrorValidation();

  qunitStart();
}
