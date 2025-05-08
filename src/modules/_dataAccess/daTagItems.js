import indexAjaxData from '../ajax/indexAjaxData';
import doTags from '../app/guild/inventory/doTags';
import $dataAccess from './$dataAccess';
import htmlResult from './fallbacks/htmlResult';

async function guildInvTag(subcmd2, invIdAry) {
  const json = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2,
    tagIndex: invIdAry,
  });
  return htmlResult(json);
}

export default function daTagItems(subcmd2, invIdAry) {
  return $dataAccess(doTags, guildInvTag, subcmd2, invIdAry);
}
