import { c as createSpan } from './createSpan-629b0f07.js';
import { f as formatLastActivity } from './formatLastActivity-8ea1567f.js';
import { E as querySelector, g as getElementsByTagName, B as setInnerHtml, C as getText, s as partial, F as querySelectorArray, z as getElementById, R as clickThis, S as getUrlParameter, T as sendEvent, y as jQueryNotPresent, o as onclick } from './calfSystem-86663d02.js';
import { i as insertElementAfter } from './insertElementAfter-71f91bb6.js';
import { c as csvSplit } from './csvSplit-d0e27857.js';
import { g as getProfile } from './getProfile-e07fcbcb.js';
import { s as setTipped } from './setTipped-c38098a5.js';
import { e as executeAll } from './executeAll-9a33204f.js';
import { o as outputFormat } from './outputFormat-64398632.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0e0c4a8c.js';
import { q as quickbuffSuccess, d as daQuickbuff } from './quickbuffSuccess-d08f2bd2.js';
import './splitTime-348bc287.js';
import './insertElementBefore-c2bb9234.js';
import './cmdExport-9ec958fe.js';
import './indexAjaxJson-7a15a235.js';
import './getBuff-dae825fd.js';
import './buffObj-c604f006.js';

function getActivitySpan(myPlayer) {
  let activity = querySelector('span.fshLastActivity', myPlayer);
  if (!activity) {
    activity = createSpan({ className: 'fshLastActivity' });
    const player = getElementsByTagName('h1', myPlayer)[0];
    insertElementAfter(activity, player);
  }
  return activity;
}

function addStatsQuickBuff(data) {
  const myPlayer = querySelector(`div.player[data-username="${
    data.username}"]`);
  const activity = getActivitySpan(myPlayer);
  setInnerHtml(`Last Activity: ${
    formatLastActivity(data.last_login)}<br>Stamina: ${
    data.current_stamina} / ${data.stamina} ( ${
    Math.floor((data.current_stamina / data.stamina) * 100)}% )`, activity);
}

function parseBuffLevel(el) {
  return Number(getText(el).replace(/\[|\]/g, ''));
}

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

function buffRunning$1(el, playerBuffLevel, playerSpan) {
  if (!playerBuffLevel) {
    setInnerHtml('', playerSpan);
    return;
  }
  const lvlSpan = el.nextElementSibling.children[0].children[0];
  const myLvl = parseBuffLevel(lvlSpan);
  const fshPlayerSpan = newPlayerSpan(el, playerSpan);
  const buffColor = getBuffColor(myLvl, playerBuffLevel);
  setInnerHtml(` <span class="${buffColor}">[${playerBuffLevel}]</span>`,
    fshPlayerSpan);
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
    buffRunning$1(el, playerBuffLevel, playerSpan);
  }
}

function shred(str) {
  return str.split(/ \[|]/);
}

function makeBuffArray(player) {
  return csvSplit(getText(player.parentNode.lastElementChild)).map(shred);
}

function addBuffLevels(evt) {
  const player = evt.target;
  if (player.tagName !== 'H1') { return; }
  getProfile(getText(player)).then(addStatsQuickBuff);
  const playerData = makeBuffArray(player);
  querySelectorArray('#buff-outer input[name]')
    .forEach(partial(hazBuff, playerData));
}

const quickBuffHeader = '<div id="helperQBheader"><table class="quickbuffTable"><thead><tr>'
  + '<th class="quickbuffTableHeader">Sustain</th>'
  + '<th class="quickbuffTableHeader">Fury Caster</th>'
  + '<th class="quickbuffTableHeader">Guild Buffer</th>'
  + '<th class="quickbuffTableHeader">Buff Master</th>'
  + '<th class="quickbuffTableHeader">Extend</th>'
  + '<th class="quickbuffTableHeader">Reinforce</th>'
  + '</tr></thead><tbody><tr>'
  + '<td id="fshSus" class="quickbuffTableDetail">&nbsp;</td>'
  + '<td id="fshFur" class="quickbuffTableDetail">&nbsp;</td>'
  + '<td id="fshGB"  class="quickbuffTableDetail">&nbsp;</td>'
  + '<td id="fshBM"  class="quickbuffTableDetail">&nbsp;</td>'
  + '<td id="fshExt" class="quickbuffTableDetail">&nbsp;</td>'
  + '<td id="fshRI"  class="quickbuffTableDetail">&nbsp;</td>'
  + '</tr></tbody></table></div>';
const excludeBuff = [
  50, // Death Dealer
  54, // Counter Attack
  55, // Summon Shield Imp
  56, // Vision
  60, // Nightmare Visage
  61, // Quest Finder
  98, // Barricade
  101, // Severe Condition
];

function addStamCost(el, nameSpan) {
  const dataTipped = nameSpan.dataset.tipped;
  const { cost } = el.previousElementSibling.dataset;
  setTipped(dataTipped.replace('</center>', `<br>Stamina Cost: ${cost}$&`),
    nameSpan);
}

function canBeDimmed(el, nameSpan) {
  return !excludeBuff.includes(Number(el.htmlFor.slice(6)))
    && parseBuffLevel(nameSpan.children[0]) < 125;
}

function dimPreReqs(el, nameSpan) {
  if (canBeDimmed(el, nameSpan)) {
    el.classList.add('fshDim');
  }
}

function decorate(el) {
  const nameSpan = el.children[0];
  addStamCost(el, nameSpan);
  dimPreReqs(el, nameSpan);
}

function doLabels() {
  querySelectorArray('#buff-outer label[for^="skill-"]').forEach(decorate);
}

function waitForPlayer(firstPlayer, retries) {
  return !firstPlayer && retries;
}

function haveTargets(retries) {
  const firstPlayer = getElementsByTagName('h1', getElementById('players'))[0];
  if (waitForPlayer(firstPlayer, retries)) {
    setTimeout(haveTargets, 100, retries - 1);
    return;
  }
  if (firstPlayer) { clickThis(firstPlayer); }
}

function firstPlayerStats() {
  const targets = getElementById('targetPlayers').value;
  if (targets) { haveTargets(9); }
}

function buffTimeLeft(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  let buffTimeToExpire = outputFormat(m, 'm');
  if (m > 0 && s > 0) { buffTimeToExpire += ' '; }
  buffTimeToExpire += outputFormat(s, 's');
  return buffTimeToExpire;
}

function timeToExpire(s) {
  const buffTimeToExpire = buffTimeLeft(s);
  return `<span class="fshLime">On</span>&nbsp;<span class="fshBuffOn">(${
    buffTimeToExpire})</span>`;
}

function isAvailable(buff) {
  const elem = querySelector(`#buff-outer input[data-name="${buff}"]`);
  if (elem) {
    return `<span class="quickbuffActivate" data-buffid="${elem.value
    }">Activate</span>`;
  }
  return '<span class="fshRed;">Off</span>';
}

function buffRunning(dict, buff) {
  const s = dict[buff] || 0;
  if (s) { return timeToExpire(s); }
  return isAvailable(buff);
}

function getBuff(dict, buff, inject) {
  setInnerHtml(buffRunning(dict, buff), inject);
}

function makeDictionary(acc, curr) {
  acc[curr.name] = curr.duration;
  return acc;
}

function populateBuffs(responseText) {
  const skl = responseText._skills.reduce(makeDictionary, {});
  getBuff(skl, 'Guild Buffer', getElementById('fshGB'));
  getBuff(skl, 'Buff Master', getElementById('fshBM'));
  getBuff(skl, 'Extend', getElementById('fshExt'));
  getBuff(skl, 'Reinforce', getElementById('fshRI'));
}

function thisName(name, enhancement) {
  return enhancement.name === name;
}

function thisEnhancementLevel(enhancements, name) {
  const thisEnhancement = enhancements.find(partial(thisName, name));
  return (thisEnhancement && thisEnhancement.value) || 0;
}

function getEnhancement(enhancements, name, inject) {
  const enhLevel = thisEnhancementLevel(enhancements, name);
  let enhClass = 'fshLime';
  if (enhLevel < 100) { enhClass = 'fshRed'; }
  setInnerHtml(`<span class="${enhClass}">${enhLevel}%</span>`, inject);
}

function populateEnhancements(responseText) {
  const enh = responseText._enhancements;
  getEnhancement(enh, 'Sustain', getElementById('fshSus'));
  getEnhancement(enh, 'Fury Caster', getElementById('fshFur'));
}

function getSustain(responseText) {
  populateEnhancements(responseText);
  populateBuffs(responseText);
}

function tickBuff(id) {
  const thisBuff = getElementById(`skill-${id}`);
  if (thisBuff) {
    thisBuff.checked = true;
  }
}

function tickBuffs(passThru) {
  passThru.split(';').forEach(tickBuff);
}

function passThruBuffs() {
  const passThru = getUrlParameter('blist');
  if (passThru) { tickBuffs(passThru); }
}

let requests;

function processQueue() {
  if (requests.length) {
    window.addPlayer(requests.shift());
    setTimeout(processQueue, 200);
  } else {
    setTimeout(firstPlayerStats, 200);
  }
}

function passThruPlayers() {
  const passThru = getUrlParameter('players');
  if (passThru) {
    requests = csvSplit(passThru);
    processQueue();
  }
}

function processResult(trigger, json) {
  if (quickbuffSuccess(json)) {
    // eslint-disable-next-line no-param-reassign
    trigger.className = 'fshLime';
    setInnerHtml('On', trigger);
  }
}

async function quickActivate(evt) { // jQuery.min
  const trigger = evt.target;
  if (trigger.className !== 'quickbuffActivate') { return; }
  sendEvent('quickbuff', 'quickActivate');
  const json = await daQuickbuff([window.self], [trigger.dataset.buffid]);
  processResult(trigger, json);
}

function setupEventHandlers() {
  onclick(getElementById('helperQBheader'), quickActivate);
  onclick(getElementById('players'), addBuffLevels);
}

function injectQuickBuff() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  const quickbuffDiv = getElementById('quickbuff');
  if (!quickbuffDiv) { return; }
  getProfile(window.self).then(getSustain);
  insertHtmlAfterEnd(quickbuffDiv.children[0], quickBuffHeader);
  executeAll([
    doLabels,
    passThruBuffs,
    passThruPlayers,
    setupEventHandlers,
    firstPlayerStats,
  ]);
}

export default injectQuickBuff;
//# sourceMappingURL=quickBuff-0402a564.js.map
