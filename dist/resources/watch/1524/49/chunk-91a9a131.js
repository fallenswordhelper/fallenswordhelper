function chunk(size, ary) {
  const ret = [];
  for (let i = 0; i < ary.length; i += size) {
    ret.push(ary.slice(i, i + size));
  }
  return ret;
}

export { chunk as c };
//# sourceMappingURL=chunk-91a9a131.js.map
