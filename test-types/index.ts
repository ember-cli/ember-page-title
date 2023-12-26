import 'ember-source/types';
import '@glint/environment-ember-loose';

import Helper from '@ember/component/helper';

import { expectTypeOf } from 'expect-type';
import { pageTitle } from 'ember-page-title';

expectTypeOf(new pageTitle()).toMatchTypeOf<Helper<any>>();
