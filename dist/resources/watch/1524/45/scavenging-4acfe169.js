import { c as closestTable } from './closestTable-73233069.js';
import { c as createSpan } from './createSpan-d9a55780.js';
import { z as getElementById, i as insertElement, C as getText, B as setInnerHtml, s as partial, k as on, X as setValue, bC as defCmd, aM as isFunction, b as createDiv, p as pCC, bD as alpha, e as entries } from './calfSystem-02fd040d.js';
import { i as intValue } from './intValue-a6f9b475.js';
import { n as numberIsNaN } from './numberIsNaN-c7db67d0.js';
import './closest-8e46d454.js';

function clearWidth(multCnt) {
  const parentTable = closestTable(multCnt);
  parentTable.removeAttribute('width');
}

function makeMaxTimes(multCnt) {
  const maxTimes = createSpan();
  insertElement(multCnt.parentNode, maxTimes);
  return maxTimes;
}

function updateMaxTimes(maxTimes, statbarGold, scoutGold) {
  const myGold = intValue(getText(statbarGold));
  const times = Math.floor(myGold / scoutGold).toString();
  setInnerHtml(`&nbsp;&nbsp;Max: ${times} times`, maxTimes);
}

function redrawMaxTimes(maxTimes, statbarGold, gold) {
  setInnerHtml('', maxTimes);
  const scoutGold = Number(gold.value);
  if (!numberIsNaN(scoutGold) && scoutGold !== 0) {
    updateMaxTimes(maxTimes, statbarGold, scoutGold);
  }
}

function setMaxTimes(maxTimes, statbarGold, gold) {
  if (maxTimes) {
    redrawMaxTimes(maxTimes, statbarGold, gold);
  }
}

function initMaxTimes(maxTimes, statbarGold, gold) {
  const boundSet = partial(setMaxTimes, maxTimes, statbarGold, gold);
  boundSet();
  on(gold, 'keyup', boundSet);
}

function foundMultiplierCount(multCnt) {
  clearWidth(multCnt);
  initMaxTimes(makeMaxTimes(multCnt), getElementById('statbar-gold'),
    getElementById('gold'));
}

function lookForMultiplierCount() {
  const multCnt = getElementById('multiplier_count');
  if (multCnt) { foundMultiplierCount(multCnt); }
}

function setLastScav(caveId, gold) {
  setValue('lastScavPage',
    `${defCmd}scavenging&cave_id=${caveId}&gold=${gold}`);
}

/* global sendRequest:true */

let fshSummary;

function getSummary() {
  if (!fshSummary) {
    fshSummary = createDiv();
    insertElement(pCC, fshSummary);
  }
  setInnerHtml('', fshSummary);
  return fshSummary;
}

function getVictories(report) {
  const victories = report.match(/victorious/g);
  if (victories) {
    return `Victories: ${victories.length}`;
  }
  return '';
}

function getDefeats(report) {
  const defeats = report.match(/defeated/g);
  if (defeats) {
    return `, Defeated: ${defeats.length}`;
  }
  return '';
}

function makeHash(acc, curr) {
  const itemName = curr.match(/>([^<]+)</)[1];
  acc[itemName] = (acc[itemName] || 0) + 1;
  return acc;
}

function buildGainHash(gains) {
  return gains.reduce(makeHash, {});
}

function alphaEntries(a, b) { return alpha(a[0], b[0]); }

function summary(pair) { return `<br>${pair[1]} ${pair[0]}(s), `; }

function gotGains(gains) {
  const gainHash = buildGainHash(gains);
  return `<br>${gains.length} item(s):${
    entries(gainHash).sort(alphaEntries).map(summary).join('')}`;
}

function getGains(report) {
  const gains = report.match(/Item Gained: <b>[^<]+<\/b>/g);
  if (gains) { return gotGains(gains); }
  return '';
}

function multiScav() {
  let ret = '';
  const scavRes = getElementById('scavenge_results');
  if (scavRes) {
    const report = scavRes.innerHTML;
    ret += getVictories(report);
    ret += getDefeats(report);
    ret += getGains(report);
  }
  return ret;
}

function interceptSendRequest(oldSendRequest) {
  return function b(amount, goldValue, caveValue) {
    oldSendRequest(amount, goldValue, caveValue);
    setLastScav(caveValue, goldValue);
    setInnerHtml(multiScav(), getSummary());
  };
}

function lookForSendRequest() {
  const oldSendRequest = sendRequest;
  if (isFunction(oldSendRequest)) {
    sendRequest = interceptSendRequest(oldSendRequest);
  }
}

function injectScavenging() {
  lookForSendRequest();
  lookForMultiplierCount();
}

export default injectScavenging;
//# sourceMappingURL=scavenging-4acfe169.js.map
