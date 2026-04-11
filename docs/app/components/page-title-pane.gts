import type { TemplateOnlyComponent } from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
import { hash } from '@ember/helper';
import NestedTemplate from './page-title-pane/nested-template';

interface Signature {
  Element: HTMLDivElement;
  Args: {
    title: string;
  };
  Blocks: {
    default: [
      components: {
        template: ComponentLike<{ Args: { separator?: string }; Blocks: { default: [] } }>;
      },
    ];
  };
}

const PageTitlePane: TemplateOnlyComponent<Signature> = <template>
  <div class='window-pane has-title' ...attributes>
    <header>
      <span class='close button'></span>
      <span class='minimize button'></span>
      <span class='maximize button'></span>
      {{@title}}
    </header>
    <div>
      {{yield (hash template=(component NestedTemplate))}}
    </div>
  </div>
</template>;

export default PageTitlePane;
