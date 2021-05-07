import { s as partial, u as indexAjaxData, $ as $dataAccess } from './calfSystem-476ab75d.js';
import { b as backpack } from './backpack-fbf3a2fc.js';
import { a as ajaxReturnCode, e as equipItem, u as useItem } from './useItem-14ac32ce.js';
import { e as errorDialog } from './errorDialog-0f2ff56e.js';
import { h as htmlResult } from './htmlResult-4555c0a2.js';
import { g as guildInventory, t as takeItem } from './takeItem-7456490e.js';

function itemId(href) {
  return href.match(/&id=(\d+)/)[1];
}

function itemStatus(data) { return data; }

function doAction(fn, item, data) {
  return fn(item).then(partial(itemStatus, data));
}

function guildInvRecall(invId, playerId, mode) {
  return indexAjaxData({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'recall',
    id: invId,
    player_id: playerId,
    mode,
  }).then(htmlResult);
}

function recall(invId, playerId, mode) {
  return guildInventory({
    subcmd2: 'recall',
    id: invId,
    player_id: playerId,
    mode,
  });
}

function daGuildRecall(invId, playerId, mode) {
  return $dataAccess(recall, guildInvRecall, invId, playerId, mode);
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

export { queueRecallItem as a, itemId as i, queueTakeItem as q };
//# sourceMappingURL=queue-7c8d57b3.js.map
