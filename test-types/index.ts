import 'ember-source/types';
import '@glint/environment-ember-loose';

// imports all resolve
import 'ember-page-title';
import 'ember-page-title/test-support';
import 'ember-page-title/template-registry';
import 'ember-page-title/service-registry';
// required for ember-cli
import 'ember-page-title/services/page-title';
import 'ember-page-title/helpers/page-title';


import { expectTypeOf } from 'expect-type';
import type Owner from '@ember/owner';

/************************
 * The Helper
 ************************/
import Helper from '@ember/component/helper';
import { pageTitle } from 'ember-page-title';

let instance = new pageTitle({} as Owner);

expectTypeOf(instance).toMatchTypeOf<Helper<any>>();
expectTypeOf<ReturnType<typeof instance['compute']>>().toBeString(/* an empty string, but still a string */);

/************************
 * The Service - public API
 ************************/
import PageTitleService from 'ember-page-title/services/page-title';
import type Service from '@ember/service';

let service = new PageTitleService({} as Owner);

expectTypeOf(service).toMatchTypeOf<Service>();
expectTypeOf(service.tokens).toBeArray();
expectTypeOf(service.tokens[0]).toMatchTypeOf<object | undefined>();
expectTypeOf<NonNullable<typeof service.tokens[0]>>()
  .toMatchTypeOf<{
    id: string, title?: string,
    separator?: string;
    prepend?: boolean;
    replace?: boolean;
    front?: unknown;
  }>();

expectTypeOf<PageTitleService['tokens']>().toBeArray();
expectTypeOf<PageTitleService['sortedTokens']>().toBeArray();
expectTypeOf<ReturnType<PageTitleService['toString']>>().toBeString();
expectTypeOf<PageTitleService['titleDidUpdate']>().toMatchTypeOf<(title: string) => void>();
expectTypeOf<PageTitleService['remove']>().toMatchTypeOf<(id: string) => void>();

expectTypeOf<PageTitleService['push']>()
  .toMatchTypeOf<(token: { id: string }) => void>();
expectTypeOf<PageTitleService['push']>()
  .toMatchTypeOf<(token: { id: string, title: string }) => void>();

// @ts-expect-error
expectTypeOf<PageTitleService['push']>().toMatchTypeOf<(token: undefined) => void>();
