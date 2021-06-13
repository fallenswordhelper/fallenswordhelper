import { b as batch } from './batch-14579652.js';
import { F as querySelectorArray, I as getValue, bA as lastActivityRE, B as setInnerHtml } from './calfSystem-02fd040d.js';
import { o as onlineDot } from './onlineDot-1f7e5ebe.js';

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
//# sourceMappingURL=colouredDots-4c7353d3.js.map
