import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default function storeitems(invIdAry) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'dostoreitems',
    storeIndex: invIdAry,
  }).then(htmlResult);
}
