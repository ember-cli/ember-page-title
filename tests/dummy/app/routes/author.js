import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  model() {
    return {
      name: 'Tomster'
    };
  }
}
