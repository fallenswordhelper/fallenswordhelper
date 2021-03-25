import { b as batch } from './batch-f79939df.js';
import { I as getValue, ad as querySelectorAll, bw as lastActivityRE, B as setInnerHtml } from './calfSystem-c08399e5.js';
import { o as onlineDot } from './onlineDot-753c9d97.js';

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
//# sourceMappingURL=colouredDots-5ca30738.js.map
