import htmlResult from './htmlResult';
import indexAjaxData from '../../ajax/indexAjaxData';

export default function guildInvTag(subcmd2, invIdAry) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2,
    tagIndex: invIdAry,
  }).then(htmlResult);
}
