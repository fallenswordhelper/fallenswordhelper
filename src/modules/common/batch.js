import isFunction from './isFunction';
import task from '../support/task';

function moreToDo(limit, ctr, list) {
  return list && performance.now() < limit && ctr < list.length;
}

function maybeEndFn(priority, endFn) {
  if (isFunction(endFn)) { task(priority, endFn); }
}

export default function batch([dur, priority, itemsAry, ctr, doFn, endFn]) {
  const limit = performance.now() + dur;
  let localCounter = ctr;
  while (moreToDo(limit, localCounter, itemsAry)) {
    doFn(itemsAry[localCounter], localCounter, itemsAry);
    localCounter += 1;
  }
  if (localCounter < itemsAry.length) {
    task(priority, batch, [[
      dur, priority, itemsAry, localCounter, doFn, endFn]]);
  } else {
    maybeEndFn(priority, endFn);
  }
}
