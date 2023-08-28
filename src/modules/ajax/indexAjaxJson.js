import jsonParse from '../common/jsonParse';
import indexAjax from './indexAjax';

export default async function indexAjaxJson(data) {
  const unsafe = await indexAjax({ data, dataType: 'text' });
  return jsonParse(unsafe) ?? { r: 1, m: 'Server Error' };
}
