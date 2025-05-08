import jsonParse from '../common/jsonParse';
import rnd from '../system/rnd';
import retryAjax from './retryAjax';

export default async function fetchdata(data) {
  const unsafe = await retryAjax({
    cache: false,
    url: 'fetchdata.php',
    data: { ...data, fshrnd: rnd() },
    dataType: 'text',
  });
  return (
    jsonParse(unsafe) ?? { response: { msg: 'Server Error', response: 1 } }
  );
}
