import Controller from '@ember/controller';
import { set, action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  add(tokens) {
    let lastToken = tokens.slice(-1)[0];
    set(this, 'model.tokens', tokens.concat({
      separator: lastToken.separator,
      prepend: lastToken.prepend
    }));
  }
}
