function getPos(available, desired, offset) {
  return Math.floor(Math.max(available - desired, 0) / 2 + offset);
}

function fshOpen(url, title, w, _h, features) {
  let h = _h;
  if (_h === 500) { h = 1000; }
  const top = getPos(window.screen.availHeight, h, window.screenY);
  const left = getPos(document.documentElement.clientWidth, w, window.screenX);
  window.open(url, title, `width=${w}, height=${h}, left=${left
  }, top=${top}${features}`);
}

export { fshOpen as f };
//# sourceMappingURL=fshOpen-d480412d.js.map
