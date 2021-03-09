function pair(acc, curr) {
  acc[curr.name] = Number(curr.level);
  return acc;
}

function reduceBuffArray(buffAry) {
  return buffAry.reduce(pair, {});
}

export { reduceBuffArray as r };
//# sourceMappingURL=reduceBuffArray-7cd20b37.js.map
