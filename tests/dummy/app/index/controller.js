import Ember from 'ember';

const { set } = Ember;

export default Ember.Controller.extend({
  actions: {
    add(tokens) {
      let lastToken = tokens.slice(-1)[0];
      set(this, 'model.tokens', tokens.concat({
        separator: lastToken.separator,
        prepend: lastToken.prepend
      }));
    }
  }
});
