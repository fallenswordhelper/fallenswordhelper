import retryAjax from '../ajax/retryAjax';
import jsonParse from '../common/jsonParse';

export default async function api(data, options) {
  const unsafe = await retryAjax({
    url: 'app.php',
    data: { browser: 1, v: 9, ...data },
    dataType: 'text',
    ...options,
  });
  return (
    jsonParse(unsafe) ?? { e: { code: 0, message: 'Server Error' }, s: false }
  );
}
