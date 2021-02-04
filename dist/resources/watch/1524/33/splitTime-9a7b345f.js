function splitTime(timeInSecs) {
  let s = timeInSecs;
  let m = Math.floor(s / 60);
  s %= 60;
  let h = Math.floor(m / 60);
  m %= 60;
  const d = Math.floor(h / 24);
  h %= 24;
  return [d, h, m, s];
}

export { splitTime as s };
//# sourceMappingURL=splitTime-9a7b345f.js.map
