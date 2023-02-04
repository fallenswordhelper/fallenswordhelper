import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default async function guildInvTag(subcmd2, invIdAry) {
  const json = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2,
    tagIndex: invIdAry,
  });
  return htmlResult(json);
}
