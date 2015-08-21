import Ember from 'ember';
import PageTitleList from 'ember-page-title/services/page-title-list';

const get = Ember.get;
const { htmlSafe } = Ember.String;

export default Ember.Component.extend({
  classNames: ['window', 'app'],
  layoutName: 'components/window',

  tokenList: Ember.computed(function () {
    return PageTitleList.create();
  }),

  title: Ember.computed(function () {
    let tokens = get(this, 'tokenList.sortedTokens');
    let title = [];
    for (let i = 0, len = tokens.length; i < len; i++) {
      let token = tokens[i];
      title.push(`<span class="title-token" id="title-${token.id}">${token.title}</span>`);
      if (i + 1 < len) {
        title.push(token.separator);
      }
    }
    return htmlSafe(title.join(''));
  }),

  titleDidChange: Ember.on('didInsertElement', function () {
    Ember.run.scheduleOnce('afterRender', () => {
      this.notifyPropertyChange('title');
    });
  }),

  updateStyles: Ember.observer('tokenList.tokens.@each.active', function () {
    get(this, 'tokenList.tokens').forEach((token) => {
      let $el = this.$(`#title-${token.id}`);
      if (!$el) { return; }
      if (token.active) {
        $el.addClass('active');
      } else {
        $el.removeClass('active');
      }
    });
  })

});
