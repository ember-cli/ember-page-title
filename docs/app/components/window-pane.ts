import templateOnly from '@ember/component/template-only';

const WindowPane = templateOnly<{
  Args: {
    title: string;
  };
  Blocks: {
    default: [];
  };
}>();

export default WindowPane;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    WindowPane: typeof WindowPane;
  }
}
