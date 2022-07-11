import alpha from '../common/alpha';
import createDiv from '../common/cElement/createDiv';
import entries from '../common/entries';
import getElementById from '../common/getElementById';
import insertElement from '../common/insertElement';
import isFunction from '../common/isFunction';
import setInnerHtml from '../dom/setInnerHtml';
import { getPcc } from '../support/layout';
import setLastScav from './setLastScav';

/* global sendRequest:true */

let fshSummary = 0;

function getSummary() {
  if (!fshSummary) {
    fshSummary = createDiv();
    insertElement(getPcc(), fshSummary);
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
  const itemName = curr.split('>')[1].split('<')[0];
  acc[itemName] = (acc[itemName] || 0) + 1;
  return acc;
}

function buildGainHash(gains) {
  return gains.reduce(makeHash, {});
}

function alphaEntries([keyA], [keyB]) { return alpha(keyA, keyB); }

function summary([key, value]) { return `<br>${value} ${key}(s), `; }

function gotGains(gains) {
  const gainHash = buildGainHash(gains);
  return `<br>${gains.length} item(s):${
    entries(gainHash).sort(alphaEntries).map(summary).join('')}`;
}

function getGains(report) {
  const gains = report.match(/Item Gained: <strong>[^<]+<\/strong>/g);
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

export default function lookForSendRequest() {
  const oldSendRequest = sendRequest;
  if (isFunction(oldSendRequest)) {
    sendRequest = interceptSendRequest(oldSendRequest);
  }
}
