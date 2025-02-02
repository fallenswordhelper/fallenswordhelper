import indexAjaxData from '../ajax/indexAjaxData';
import recall from '../app/guild/inventory/recall';
import $dataAccess from './$dataAccess';
import htmlResult from './fallbacks/htmlResult';

async function guildInvRecall(invId, playerId, mode) {
  const json = await indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'recall',
    id: invId,
    player_id: playerId,
    mode,
  });
  return htmlResult(json);
}

export default function daGuildRecall(invId, playerId, mode) {
  return $dataAccess(recall, guildInvRecall, invId, playerId, mode);
}
