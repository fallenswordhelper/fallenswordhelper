import extend from '../common/extend';
import retryAjax from '../ajax/retryAjax';

export default function postApp(data) {
  return retryAjax({
    url: 'app.php',
    data: extend(data, { browser: 1, v: 9 }),
    dataType: 'json',
    type: 'POST',
  });
}
