import daGuildRecall from '../_dataAccess/daGuildRecall';
import ajaxReturnCode from '../common/ajaxReturnCode';

export default async function recallItem(invId, playerId, mode) {
  const response = await daGuildRecall(invId, playerId, mode);
  return ajaxReturnCode(response);
}
