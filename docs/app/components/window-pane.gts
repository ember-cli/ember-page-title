import type { TemplateOnlyComponent } from '@ember/component/template-only';

interface Signature {
  Args: {
    title?: string;
  };
  Blocks: {
    default: [];
  };
}

const WindowPane: TemplateOnlyComponent<Signature> = <template>
  <div class="window-pane{{if @title ' has-title'}}">
    <header>
      <span class='close button'></span>
      <span class='minimize button'></span>
      <span class='maximize button'></span>
      {{@title}}
    </header>
    <div>
      {{yield}}
    </div>
  </div>
</template>;

export default WindowPane;
