import extend from '../common/extend';
import retryAjax from '../ajax/retryAjax';

export default function callApp(data) {
  return retryAjax({
    url: 'app.php',
    data: extend(data, { browser: 1, v: '0.8.7' }),
    dataType: 'json',
  });
}
