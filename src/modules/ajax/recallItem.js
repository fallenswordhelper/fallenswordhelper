import daGuildRecall from '../_dataAccess/daGuildRecall';
import ajaxReturnCode from '../common/ajaxReturnCode';

export default function recallItem(invId, playerId, mode) {
  return daGuildRecall(invId, playerId, mode).then(ajaxReturnCode);
}
