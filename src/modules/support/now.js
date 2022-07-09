let now = 0;
let nowSecs = 0;

export function getNow() {
  if (!now) {
    now = Date.now();
  }
  return now;
}

export function getNowSecs() {
  if (!nowSecs) {
    nowSecs = Math.floor(getNow() / 1000);
  }
  return nowSecs;
}
