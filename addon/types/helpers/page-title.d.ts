import Helper from '@ember/component/helper';

interface PageTitleSignature {
  Args: {
    Positional: [title: string];
  };
  Return: '';
}

export default class PageTitle extends Helper<PageTitleSignature> {}
