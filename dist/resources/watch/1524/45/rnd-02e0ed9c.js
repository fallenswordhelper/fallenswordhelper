function getRandomInt(_min, _max) {
  const min = Math.ceil(_min);
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function rnd() {
  return getRandomInt(1000000000, 9999999998);
}

export { getRandomInt as g, rnd as r };
//# sourceMappingURL=rnd-02e0ed9c.js.map
