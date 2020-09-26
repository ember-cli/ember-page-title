import { A } from '@ember/array';
import Component from '@glimmer/component';
import { computed, set, action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PageTitlePaneComponent extends Component {
  @service
  titleList;

  @computed('titleList.{tokens.length}')
  get lastIndex() {
    return this.titleList.tokens.length - 1;
  }

  @action
  highlight(token) {
    let tokens = A(this.titleList.tokens);
    let wasActive = token.active;
    tokens.setEach('active', false);
    set(token, 'active', !wasActive);
  }
}
