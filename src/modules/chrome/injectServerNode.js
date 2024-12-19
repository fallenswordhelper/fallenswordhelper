import createDiv from '../common/cElement/createDiv';
import contains from '../common/contains';
import getElementById from '../common/getElementById';
import getText from '../common/getText';
import hasClass from '../common/hasClass';
import insertElement from '../common/insertElement';
import querySelectorArray from '../common/querySelectorArray';
import setInnerHtml from '../dom/setInnerHtml';
import getValue from '../system/getValue';

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
    gameStats.parentNode.classList.add('fshInvisible');
  }
}

function validStatBoxes(topbannerStats, gameStats) {
  const hidden =
    topbannerStats && hasClass('topbanner-stats-hidden', topbannerStats);
  return !hidden && gameStats;
}

export default function injectServerNode() {
  if (!getValue('addServerNode')) return;
  const topbannerStats = getElementById('topbanner-stats');
  const gameStats = querySelectorArray('#pCR h3').find(contains('Game Stats'));
  if (validStatBoxes(topbannerStats, gameStats)) {
    statBoxesExist(topbannerStats, gameStats);
  }
}
