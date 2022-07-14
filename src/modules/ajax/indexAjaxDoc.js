import createDocument from '../system/createDocument';
import indexAjaxData from './indexAjaxData';

export default async function indexAjaxDoc(obj) {
  const html = await indexAjaxData(obj);
  return createDocument(html);
}
