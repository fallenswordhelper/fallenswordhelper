import pipeRecallToQueue from './pipeRecallToQueue';
import pipeTakeToQueue from './pipeTakeToQueue';

let dfr = Promise.resolve();

function getDfr() {
  if (!dfr) dfr = Promise.resolve();
  return dfr;
}

export function queueTakeItem(invId, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = pipeTakeToQueue(invId, action, getDfr());
  return dfr;
}

export function queueRecallItem(invId, playerId, mode, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = pipeRecallToQueue([invId, playerId, mode, action, getDfr()]);
  return dfr;
}
