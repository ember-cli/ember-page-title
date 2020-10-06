import Component from '@glimmer/component';

export default class Matryoshka extends Component {
  get item() {
    return this.args.items[0];
  }

  get nextItems() {
    return this.args.items.slice(1);
  }
}
