import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default async function guildInvRecall(invId, playerId, mode) {
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
