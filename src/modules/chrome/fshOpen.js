function getPos(available, desired, offset) {
  return Math.floor(Math.max(available - desired, 0) / 2 + offset);
}

// codebeat:disable[ARITY]
export default function fshOpen(url, title, w, _h, features) {
  let height = _h;
  if (_h === 500) { height = 1000; }
  const top = getPos(window.screen.availHeight, height, window.screenY);
  const left = getPos(document.documentElement.clientWidth, w, window.screenX);
  window.open(url, title, `width=${w}, height=${height}, left=${left
  }, top=${top}${features}`);
}
// codebeat:enable[ARITY]
