import Application from 'docs/app';
import config from 'docs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { loadTests } from 'ember-qunit/test-loader';

loadTests();
setApplication(Application.create(config.APP));

start();
