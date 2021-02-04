import { b as batch } from './batch-96692bf0.js';
import { H as getValue, ab as querySelectorAll, bx as lastActivityRE, A as setInnerHtml } from './calfSystem-cc2b30b5.js';
import { o as onlineDot } from './onlineDot-c3b7100a.js';

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
//# sourceMappingURL=colouredDots-7921860f.js.map
