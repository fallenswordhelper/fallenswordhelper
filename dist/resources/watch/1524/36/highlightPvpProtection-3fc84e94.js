import { E as querySelector, ab as pointsUrl, H as getTextTrim } from './calfSystem-c08399e5.js';

function highlightPvpProtection() {
  const pvpp = querySelector(`#profileLeftColumn a[href="${pointsUrl}"]`);
  if (pvpp && getTextTrim(pvpp.parentNode.nextSibling) !== 'N/A') { // Text Node
    pvpp.parentNode.parentNode.style.cssText = 'border: 3px solid red'; // TODO
  }
}

export default highlightPvpProtection;
//# sourceMappingURL=highlightPvpProtection-3fc84e94.js.map
