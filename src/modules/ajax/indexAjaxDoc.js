import createDocument from '../system/createDocument';
import indexAjaxData from './indexAjaxData';

export default async function indexAjaxDoc(obj) {
  const html = await indexAjaxData(obj);
  if (html) return createDocument(html);
}
