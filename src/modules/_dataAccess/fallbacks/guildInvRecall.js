import indexAjaxData from '../../ajax/indexAjaxData';
import htmlResult from './htmlResult';

export default function guildInvRecall(invId, playerId, mode) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'recall',
    id: invId,
    player_id: playerId,
    mode,
  }).then(htmlResult);
}
