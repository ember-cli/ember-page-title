import Ember from 'ember';

const { get, set, run: { scheduleOnce } } = Ember;

export default Ember.Component.extend({
  classNames: ['nested-template'],
  classNameBindings: ['token.active:active'],

  didReceiveAttrs() {
    if (get(this, 'token') == null) {
      set(this, 'token', {
        id: get(this, 'elementId'),
        title: get(this, 'title'),
        replace: get(this, 'replace'),
        separator: get(this, 'separator'),
        prepend: get(this, 'prepend')
      });
      scheduleOnce('afterRender', () => {
        get(this, 'titleList').push(get(this, 'token'));
      });
    }
  },

  click() {
    get(this, 'onactivate')(get(this, 'token'));
    return false;
  }
});
