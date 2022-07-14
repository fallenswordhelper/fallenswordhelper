import recall from '../app/guild/inventory/recall';
import $dataAccess from './$dataAccess';
import guildInvRecall from './fallbacks/guildInvRecall';

export default function daGuildRecall(invId, playerId, mode) {
  return $dataAccess(recall, guildInvRecall, invId, playerId, mode);
}
