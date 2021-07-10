import addContacts from './addContacts';
import calf from '../../support/calf';
import classHandler from '../../common/classHandler';
import createDiv from '../../common/cElement/createDiv';
import fallback from '../../system/fallback';
import getArrayByClassName from '../../common/getArrayByClassName';
import getElementById from '../../common/getElementById';
import getText from '../../common/getText';
import insertElementAfterBegin from '../../common/insertElementAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import myStats from '../../ajax/myStats';
import onclick from '../../common/onclick';
import openQuickBuffByName from '../../common/openQuickBuffByName';
import { pCR } from '../../support/layout';
import partial from '../../common/partial';
import setInnerHtml from '../../dom/setInnerHtml';
import task from '../../support/task';
import {
  enemyBuffCheckOff,
  enemyBuffCheckOn,
  enemyQuickbuff,
  enemySelectedBuff,
  enemySendMessage,
} from './constants';

const noAlliesTests = [
  (allies, enemies) => allies.length + enemies.length,
  (allies, enemies) => {
    if (!calf.enableAllyOnlineList) { return enemies.length; }
  },
  (allies) => {
    if (!calf.enableEnemyOnlineList) { return allies.length; }
  },
];

function condition(allies, enemies, e) { return e(allies, enemies) === 0; }

function noAllies(allies, enemies) {
  return noAlliesTests.every(partial(condition, allies, enemies));
}

function hazAllies(allies, enemies) {
  let output = '';
  if (calf.enableAllyOnlineList) {
    output += addContacts(allies, true);
  }
  if (calf.enableEnemyOnlineList) {
    output += addContacts(enemies, false);
  }
  const fshContactList = getElementById('fshContactList');
  setInnerHtml('', fshContactList);
  insertHtmlBeforeEnd(fshContactList, output);
}

function injectAllyEnemyList(data) {
  const allies = fallback(data._allies, []);
  const enemies = fallback(data._enemies, []);
  if (noAllies(allies, enemies)) { return; }
  hazAllies(allies, enemies);
}

function resetList() {
  myStats(true).then(injectAllyEnemyList);
}

function toggleBuffSelected(target) {
  target.classList.toggle(enemyBuffCheckOn);
  target.classList.toggle(enemyBuffCheckOff);
}

function msgPlayer(target) {
  window.openQuickMsgDialog(getText(target.parentNode.previousElementSibling
    .lastElementChild));
}

function buffPlayer(target) {
  openQuickBuffByName(getText(target.parentNode
    .previousElementSibling.lastElementChild));
}

function selectedBuff() {
  const buffBalls = getArrayByClassName(enemyBuffCheckOn,
    getElementById('fshContactList'));
  const sendstring = buffBalls.map(
    (el) => getText(el.nextElementSibling),
  );
  openQuickBuffByName(sendstring.join());
}

const classEvt = [
  [enemyBuffCheckOn, toggleBuffSelected],
  [enemyBuffCheckOff, toggleBuffSelected],
  [enemySendMessage, msgPlayer],
  [enemyQuickbuff, buffPlayer],
  [enemySelectedBuff, selectedBuff],
];

function eventHandler(evt) {
  const { target } = evt;
  if (target.id === 'fshResetEnemy') {
    resetList();
    return;
  }
  classHandler(classEvt)(evt);
}

function makeDiv(data) {
  const fshAllyEnemy = createDiv({
    id: 'fshAllyEnemy',
    className: 'minibox',
  });
  let wrapper = '<h3>Allies/Enemies</h3><div class="minibox-content">'
    + '<h4>Online Contacts <span id="fshResetEnemy">Reset</span></h4>'
    + '<div id="minibox-enemy"><ul id="fshContactList"></ul>';
  if (!calf.hideBuffSelected) {
    wrapper += `<ul class="${enemySelectedBuff}">Quick Buff Selected</ul>`;
  }
  wrapper += '</div></div>';
  insertHtmlBeforeEnd(fshAllyEnemy, wrapper);
  insertElementAfterBegin(pCR, fshAllyEnemy);
  onclick(fshAllyEnemy, eventHandler);
  injectAllyEnemyList(data);
}

function nextTick(data) {
  if (data) {
    task(3, makeDiv, [data]);
  }
}

export default function allyEnemy() {
  if (jQueryNotPresent()) { return; }
  myStats(false).then(nextTick);
}
