import { b as batch } from './batch-bdb21ead.js';
import { I as getValue, ad as querySelectorAll, bw as lastActivityRE, B as setInnerHtml } from './calfSystem-6840a38e.js';
import { o as onlineDot } from './onlineDot-0a5dc664.js';

function changeOnlineDot(contactLink) {
  const lastActivity = lastActivityRE.exec(contactLink.dataset.tipped);
  setInnerHtml(onlineDot({
    min: lastActivity[3],
    hour: lastActivity[2],
    day: lastActivity[1],
  }), contactLink.parentNode.previousElementSibling);
}

function colouredDots() {
  if (!getValue('enhanceOnlineDots')) { return; }
  batch([
    5,
    3,
    querySelectorAll('#pCC a[data-tipped*="Last Activity"]'),
    0,
    changeOnlineDot,
  ]);
}

export { colouredDots as c };
//# sourceMappingURL=colouredDots-a62752e1.js.map
