import templateOnly from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';

const PageTitlePane = templateOnly<{
  Element: HTMLDivElement;
  Args: {
    title: string;
  };
  Blocks: {
    default: [
      components: {
        template: ComponentLike<{ Blocks: { default: [] } }>;
      },
    ];
  };
}>();

export default PageTitlePane;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    PageTitlePane: typeof PageTitlePane;
  }
}
