import partial from '../common/partial';
import pipeRecallToQueue from './pipeRecallToQueue';
import pipeTakeToQueue from './pipeTakeToQueue';

let dfr;

function getDfr() {
  if (!dfr) { dfr = Promise.resolve(); }
  return dfr;
}

export function queueTakeItem(invId, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().then(partial(pipeTakeToQueue, invId, action));
  return dfr;
}

export function queueRecallItem(invId, playerId, mode, action) {
  // You have to chain them because they could be modifying the backpack
  dfr = getDfr().then(partial(pipeRecallToQueue, invId, playerId, mode, action));
  return dfr;
}
