import { w as infoBoxFrom } from './calfSystem-6b7d7ae6.js';

function htmlResult(data) {
  const info = infoBoxFrom(data);
  if (info.includes('successfully')) {
    return { s: true };
  }
  return { e: { message: info }, s: false };
}

export { htmlResult as h };
//# sourceMappingURL=htmlResult-12783ecf.js.map