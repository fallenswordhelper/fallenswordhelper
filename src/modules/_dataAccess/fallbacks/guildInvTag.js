import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default function guildInvTag(subcmd2, invIdAry) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2,
    tagIndex: invIdAry,
  }).then(htmlResult);
}
