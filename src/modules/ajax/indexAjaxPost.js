import { indexPhp } from '../support/constants';
import mixin from '../common/mixin';
import retryAjax from './retryAjax';

export default function indexAjaxPost(options) {
  mixin(options, {
    url: indexPhp,
    method: 'POST',
    type: 'POST',
    data: { no_mobile: 1 },
  });
  return retryAjax(options);
}
