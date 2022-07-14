import getProfile from '../ajax/getProfile';
import createSpan from '../common/cElement/createSpan';
import csvSplit from '../common/csvSplit';
import getText from '../common/getText';
import insertElementAfter from '../common/insertElementAfter';
import partial from '../common/partial';
import querySelectorArray from '../common/querySelectorArray';
import setInnerHtml from '../dom/setInnerHtml';
import addStatsQuickBuff from './addStatsQuickBuff';
import parseBuffLevel from './parseBuffLevel';

function newPlayerSpan(el, playerSpan) {
  if (!playerSpan) {
    const ret = createSpan({ className: 'fshPlayer' });
    insertElementAfter(ret, el.nextElementSibling);
    return ret;
  }
  return playerSpan;
}

function getBuffColor(myLvl, playerBuffLevel) {
  if (myLvl > playerBuffLevel) { return 'fshRed'; }
  return 'fshGreen';
}

function buffRunning(el, playerBuffLevel, playerSpan) {
  if (!playerBuffLevel) {
    setInnerHtml('', playerSpan);
    return;
  }
  const lvlSpan = el.nextElementSibling.children[0].children[0];
  const myLvl = parseBuffLevel(lvlSpan);
  const fshPlayerSpan = newPlayerSpan(el, playerSpan);
  const buffColor = getBuffColor(myLvl, playerBuffLevel);
  setInnerHtml(` <span class="${buffColor}">[${playerBuffLevel}]</span>`, fshPlayerSpan);
}

function thisBuff(myBuffName, arr) {
  return arr[0] === myBuffName;
}

function thisBuffLevel(playerData, el) {
  const myBuffName = el.getAttribute('data-name');
  const buffArr = playerData.find(partial(thisBuff, myBuffName));
  if (buffArr) { return buffArr[1]; }
}

function hazBuff(playerData, el) {
  const playerBuffLevel = thisBuffLevel(playerData, el);
  const playerSpan = el.nextElementSibling.nextElementSibling;
  if (playerBuffLevel || playerSpan) {
    buffRunning(el, playerBuffLevel, playerSpan);
  }
}

function shred(str) {
  return str.split(/ \[|]/);
}

function makeBuffArray(player) {
  return csvSplit(getText(player.parentNode.lastElementChild)).map(shred);
}

export default function addBuffLevels(evt) {
  const player = evt.target;
  if (player.tagName !== 'H1') { return; }
  getProfile(getText(player)).then(addStatsQuickBuff);
  const playerData = makeBuffArray(player);
  querySelectorArray('#buff-outer input[name]')
    .forEach(partial(hazBuff, playerData));
}
