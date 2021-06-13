import { z as getElementById, F as querySelectorArray, aH as contains, C as getText, b as createDiv, i as insertElement, B as setInnerHtml, h as hasClass } from './calfSystem-86663d02.js';
import { t as toggleForce } from './toggleForce-70762365.js';

function doServerNode(topbannerStats, miniboxList) {
  const nodeName = getText(miniboxList.children[7]);
  const serverDiv = createDiv({
    className: 'tooltip-bottom',
    dataset: { tooltip: 'Server' },
    textContent: `Server: ${nodeName}`,
  });
  insertElement(topbannerStats, serverDiv);
}

function doOnlinePlayers(topbannerStats, miniboxList) {
  const playersOnline = miniboxList.children[3].innerHTML;
  const bannerPlayers = topbannerStats.children[0];
  setInnerHtml(`Online: ${playersOnline}`, bannerPlayers);
}

function statBoxesExist(topbannerStats, gameStats) {
  const miniboxList = gameStats.nextElementSibling.children[0];
  if (miniboxList.children.length === 8) {
    doServerNode(topbannerStats, miniboxList);
    doOnlinePlayers(topbannerStats, miniboxList);
    toggleForce(gameStats.parentNode, true);
  }
}

function validStatBoxes(topbannerStats, gameStats) {
  const hidden = topbannerStats
    && hasClass('topbanner-stats-hidden', topbannerStats);
  return !hidden && gameStats;
}

function injectServerNode() {
  const topbannerStats = getElementById('topbanner-stats');
  const gameStats = querySelectorArray('#pCR h3').find(contains('Game Stats'));
  if (validStatBoxes(topbannerStats, gameStats)) {
    statBoxesExist(topbannerStats, gameStats);
  }
}

export default injectServerNode;
//# sourceMappingURL=injectServerNode-5b3decd6.js.map
