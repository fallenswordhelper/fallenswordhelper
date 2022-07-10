import rnd from '../system/rnd';
import retryAjax from './retryAjax';

export default function fetchdata(data) {
  return retryAjax({
    cache: false,
    url: 'fetchdata.php',
    data: { ...data, fshrnd: rnd() },
    dataType: 'json',
  });
}
