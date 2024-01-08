import templateOnly from '@ember/component/template-only';

const NestedTemplate = templateOnly<{
  Blocks: {
    default: [];
  };
}>();

export default NestedTemplate;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'PageTitlePane::NestedTemplate': typeof NestedTemplate;
    'page-title-pane/nested-template': typeof NestedTemplate;
  }
}
