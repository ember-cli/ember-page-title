import type { TemplateOnlyComponent } from '@ember/component/template-only';

interface Signature {
  Args: {
    separator?: string;
  };
  Blocks: {
    default: [];
  };
}

const NestedTemplate: TemplateOnlyComponent<Signature> = <template>
  <div class="nested-template">
    {{yield}}
  </div>
</template>;

export default NestedTemplate;
