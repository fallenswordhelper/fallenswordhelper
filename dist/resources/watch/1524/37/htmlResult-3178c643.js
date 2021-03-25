import { w as infoBoxFrom } from './calfSystem-6840a38e.js';

function htmlResult(data) {
  const info = infoBoxFrom(data);
  if (info.includes('successfully')) {
    return { s: true };
  }
  return { e: { message: info }, s: false };
}

export { htmlResult as h };
//# sourceMappingURL=htmlResult-3178c643.js.map
