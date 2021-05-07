import { b as batch } from './batch-6eab8928.js';
import { F as querySelectorArray, I as getValue, bx as lastActivityRE, B as setInnerHtml } from './calfSystem-476ab75d.js';
import { o as onlineDot } from './onlineDot-a2517130.js';

function getPlayers() {
  return querySelectorArray('#pCC a[data-tipped*="Last Activity"]');
}

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
    getPlayers(),
    0,
    changeOnlineDot,
  ]);
}

export { colouredDots as c, getPlayers as g };
//# sourceMappingURL=colouredDots-b88d775e.js.map
