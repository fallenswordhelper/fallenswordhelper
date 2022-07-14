import mixin from '../common/mixin';
import { indexPhp } from '../support/constants';
import retryAjax from './retryAjax';

export default function indexAjax(options) {
  mixin(options, { url: indexPhp, data: { no_mobile: 1 } });
  return retryAjax(options);
}
