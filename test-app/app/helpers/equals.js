import { isEqual } from '@ember/utils';
import { helper } from '@ember/component/helper';

export default helper(function ([a, b]) {
  return isEqual(a, b);
});
