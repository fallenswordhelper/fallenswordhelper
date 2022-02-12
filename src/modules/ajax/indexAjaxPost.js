import indexAjax from './indexAjax';

export default function indexAjaxPost(options) {
  return indexAjax({ ...options, method: 'POST' });
}
