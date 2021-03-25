import $dataAccess from './_dataAccess';
import guildInvRecall from './fallbacks/guildInvRecall';
import recall from '../app/guild/inventory/recall';

export default function daGuildRecall(invId, playerId, mode) {
  return $dataAccess(recall, guildInvRecall, invId, playerId, mode);
}
