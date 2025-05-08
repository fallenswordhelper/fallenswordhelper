import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default async function storeitems(invIdAry) {
  const data = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'dostoreitems',
    storeIndex: invIdAry,
  });
  return htmlResult(data);
}
