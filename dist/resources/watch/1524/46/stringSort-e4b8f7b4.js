import { a5 as fallback, al as isObject, aU as isUndefined, c as calf, bD as alpha } from './calfSystem-86663d02.js';

function getPath(obj, aPath, def) {
  let resultantObj = obj;
  const pathAry = aPath.split('.');
  const len = pathAry.length;
  for (let i = 0; i < len; i += 1) {
    if (fallback(!resultantObj, !isObject(resultantObj))) { return def; }
    resultantObj = resultantObj[pathAry[i]];
  }
  return resultantObj;
}

function path(obj, aPath, def) {
  const resultantObj = getPath(obj, aPath, def);
  if (isUndefined(resultantObj)) { return def; }
  return resultantObj;
}

function sortDesc(result) {
  if (calf.sortAsc) { return result; }
  return -result;
}

function stringSort(aa, bb) {
  const a = path(aa, calf.sortBy, 'a');
  const b = path(bb, calf.sortBy, 'a');
  return sortDesc(alpha(a, b));
}

export { stringSort as a, path as p, sortDesc as s };
//# sourceMappingURL=stringSort-e4b8f7b4.js.map
