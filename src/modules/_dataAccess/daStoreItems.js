import indexAjaxData from '../ajax/indexAjaxData';
import dostoreitems from '../app/guild/inventory/dostoreitems';
import $dataAccess from './$dataAccess';
import htmlResult from './fallbacks/htmlResult';

async function storeitems(invIdAry) {
  const data = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'dostoreitems',
    storeIndex: invIdAry,
  });
  return htmlResult(data);
}

export default function daStoreItems(invIdAry) {
  return $dataAccess(dostoreitems, storeitems, invIdAry);
}
