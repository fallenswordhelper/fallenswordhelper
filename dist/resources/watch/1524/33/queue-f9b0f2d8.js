import { s as partial } from './calfSystem-cc2b30b5.js';
import { i as indexAjaxJson } from './indexAjaxJson-ae1ced20.js';
import { a as ajaxReturnCode, e as equipItem, u as useItem } from './useItem-799678d1.js';
import { e as errorDialog } from './errorDialog-998604da.js';
import { g as guildInventory } from './guildInventory-c046fd61.js';
import { d as dialog } from './dialog-fd1181f5.js';

function backpack() {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'fetchinv',
  });
}

function itemStatus(data) { return data; }

function doAction(fn, item, data) {
  return fn(item).then(partial(itemStatus, data));
}

function recall(invId, playerId, mode) {
  return guildInventory({
    subcmd2: 'recall',
    id: invId,
    player_id: playerId,
    mode,
  });
}

// import { $dataAccess } from './_dataAccess';

function daGuildRecall(invId, playerId, mode) {
  // return $dataAccess(recall, guildInvRecall, invId, playerId, mode);
  return recall(invId, playerId, mode);
}

function recallItem(invId, playerId, mode) {
  return daGuildRecall(invId, playerId, mode).then(ajaxReturnCode);
}

function gotBackpack(action, data, bpData) {
  // TODO assuming backpack is successful...
  const lastBackpackItem = bpData.items[bpData.items.length - 1].a;
  if (action === 'wear') {
    return doAction(equipItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, lastBackpackItem, data);
    // Return recall status irrespective of the status of the useitem
  }
}

function recallItemStatus(action, data) {
  if (data.r === 0 && action !== 'recall') {
    return backpack().then(partial(gotBackpack, action, data));
  }
  return data;
}

function pipeRecallToQueue(invId, playerId, mode, action) {
  return recallItem(invId, playerId, mode).then(errorDialog)
    .then(partial(recallItemStatus, action));
}

function takeItem(invId) {
  return indexAjaxJson({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'takeitem',
    guildstore_id: invId,
    ajax: 1,
  }).then(dialog);
}

function additionalAction(action, data) {
  if (action === 'wear') {
    return doAction(equipItem, data.b, data);
    // Return takeitem status irrespective of the status of the equipitem
  }
  if (action === 'use') {
    return doAction(useItem, data.b, data);
    // Return takeitem status irrespective of the status of the useitem
  }
}

function takeItemStatus(action, data) {
  if (data.r === 0 && action !== 'take') {
    return additionalAction(action, data);
  }
  return data;
}

function pipeTakeToQueue(invId, action) {
  return takeItem(invId).then(partial(takeItemStatus, action));
}

let dfr;

function getDfr() {
  if (!dfr) { dfr = Promise.resolve(); }
  return dfr;
}

function queueTakeItem(invId, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().then(partial(pipeTakeToQueue, invId, action));
  return dfr;
}

function queueRecallItem(invId, playerId, mode, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().then(partial(pipeRecallToQueue,
    invId, playerId, mode, action));
  return dfr;
}

export { queueRecallItem as a, queueTakeItem as q };
//# sourceMappingURL=queue-f9b0f2d8.js.map
