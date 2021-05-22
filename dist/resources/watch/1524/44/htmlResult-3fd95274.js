import { w as infoBoxFrom } from './calfSystem-23094c64.js';

function htmlResult(data) {
  const info = infoBoxFrom(data);
  if (info.includes('successfully')) {
    return { s: true };
  }
  return { e: { message: info }, s: false };
}

export { htmlResult as h };
//# sourceMappingURL=htmlResult-3fd95274.js.map
