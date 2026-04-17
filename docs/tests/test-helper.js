import Application from 'docs/app';
import config from 'docs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';

export function start() {
  setApplication(Application.create(config.APP));

  setupEmberOnerrorValidation();

  qunitStart();
}
