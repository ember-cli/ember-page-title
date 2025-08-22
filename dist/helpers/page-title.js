import { _ as _applyDecoratedDescriptor, a as _initializerDefineProperty, b as _defineProperty } from '../_rollupPluginBabelHelpers-9wjJaosZ.js';
import { service } from '@ember/service';
import Helper from '@ember/component/helper';
import { guidFor } from '@ember/object/internals';

var _dec, _class, _descriptor;
/**
 * `{{pageTitle}}` helper used to set the title of the current route context.
 *
 * ```gjs
 * import { pageTitle } from 'ember-page-title';
 *
 * <template>
 *   {{pageTitle "the text to set the tab's title to"}}
 *   {{pageTitle \@model.post.title}}
 * </template>
 * ```
 */
let PageTitle = (_dec = service('page-title'), (_class = class PageTitle extends Helper {
  constructor(owner) {
    super(owner);
    _initializerDefineProperty(this, "tokens", _descriptor, this);
    _defineProperty(this, "tokenId", guidFor(this));
    this.tokens.push({
      id: this.tokenId
    });
  }
  compute(params, userOptions) {
    const options = {
      ...userOptions,
      id: this.tokenId,
      title: params.join('')
    };
    this.tokens.push(options);
    this.tokens.scheduleTitleUpdate();
    // We must return an empty value here because otherwise
    // invoking the pageTitle helper will render something
    // in the component it's used in, and we don't want that.
    //
    // pageTitle is a side-effecting helper.
    // We *synchronize* the document.title with our internal state.
    return '';
  }
  willDestroy() {
    super.willDestroy();
    this.tokens.remove(this.tokenId);
    this.tokens.scheduleTitleUpdate();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "tokens", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));

export { PageTitle as default };
//# sourceMappingURL=page-title.js.map
