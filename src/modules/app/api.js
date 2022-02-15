import retryAjax from '../ajax/retryAjax';

export default function api(data, options) {
  return retryAjax({
    url: 'app.php',
    data: { browser: 1, v: 9, ...data },
    dataType: 'json',
    ...options,
  });
}
