import { a as add, aB as isFunction } from './calfSystem-6840a38e.js';

function moreToDo(limit, ctr, list) {
  return list && performance.now() < limit && ctr < list.length;
}

function maybeEndFn(priority, endFn) {
  if (isFunction(endFn)) { add(priority, endFn); }
}

function batch([dur, priority, itemsAry, ctr, doFn, endFn]) {
  const limit = performance.now() + dur;
  let localCounter = ctr;
  while (moreToDo(limit, localCounter, itemsAry)) {
    doFn(itemsAry[localCounter], localCounter, itemsAry);
    localCounter += 1;
  }
  if (localCounter < itemsAry.length) {
    add(priority, batch, [[
      dur, priority, itemsAry, localCounter, doFn, endFn]]);
  } else {
    maybeEndFn(priority, endFn);
  }
}

export { batch as b };
//# sourceMappingURL=batch-bdb21ead.js.map
