import Application from 'test-app/app';
import config from 'test-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';

loadTests();
setApplication(Application.create(config.APP));

start();
