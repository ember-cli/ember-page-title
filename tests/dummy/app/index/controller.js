import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
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
