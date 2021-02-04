import { q as extend, B as getText, aa as insertHtmlAfterBegin, s as partial, o as onclick, f as insertHtmlBeforeEnd, i as insertElement, D as querySelector, H as getValue, p as pCC, x as jQueryNotPresent, M as arrayFrom, e as entries } from './calfSystem-cc2b30b5.js';
import { b as batch } from './batch-96692bf0.js';
import { g as getMembrList } from './getMembrList-bb54a53d.js';
import { n as notLastUpdate } from './notLastUpdate-3206bf54.js';
import { b as bitwiseAnd } from './bitwiseAnd-c508580e.js';
import { c as createInput } from './createInput-fee5fccc.js';
import { c as createSpan } from './createSpan-6522d45b.js';
import { g as guild } from './guild-b4b44a5f.js';
import { r as replaceChild } from './replaceChild-39c1023b.js';
import { r as roundToString } from './roundToString-63b5b3af.js';
import { i as insertElementBefore } from './insertElementBefore-0a7f2602.js';
import { p as playerName } from './playerName-bc6aeb96.js';
import { t as toLowerCase } from './toLowerCase-abb30c3b.js';
import './currentGuildId-6f36e6e5.js';
import './cmdExport-2f5bcecd.js';
import './indexAjaxJson-ae1ced20.js';
import './idb-cc82dc55.js';
import './numberIsNaN-c188f177.js';

function ranks(data) {
  return guild(extend({ subcmd: 'ranks' }, data));
}

// import { $dataAccess } from './_dataAccess';
// import ranksView from './fallbacks/ranksView';

function daRanksView() {
  // return $dataAccess(ranks, ranksView);
  return ranks();
}

const privLookup = [
  [0x2, 5], //       Bank Withdraw
  [0x4, 4], //       Build/Upgrade Structures
  [0x40, 5], //      Build/Upgrade/Demolish Structures
  [0x100, 0.1], //   Store Items
  [0x200, 0.2], //   Take Items
  [0x1000, 0.5], //  Can Mass Messages
  [0x8000, 0.2], //  Can Recall Tagged Items
  [0x80000, 0.1], // Can View Advisor
  [0x10000, 5], //   Can Un-Tag Items
  [0x400000, 4], //   Can Kick Members
];

function calcPermWeight(perms) {
  return roundToString(
    privLookup.filter(([flag]) => bitwiseAnd(perms, flag))
      .reduce((a, [, weight]) => a + weight - 1, 0)
    + perms.toString(2).split('').map(Number).reduce((a, b) => a + b, 0),
    1,
  );
}

function parseRankData(memberRanks, row) {
  // Makes a weighted calculation of available permissions and gets tax rate
  const rankCell = row.children[0];
  const rankName = getText(rankCell.firstChild); // Text Node
  const thisRank = memberRanks.find((r) => r && r.name === rankName);
  if (thisRank) {
    insertHtmlAfterBegin(rankCell, `<span class="fshBlue">(${
      calcPermWeight(thisRank.permissions)
    }) Tax:(${thisRank.tax}%)</span> `);
  }
}

function gotRankData(theRows, spinner, json) {
  if (json.s) {
    theRows.forEach(partial(parseRankData, [json.r['0']].concat(json.r.ranks)));
    spinner.classList.remove('fshSpinner');
  }
}

function fetchRankData(theRows, weightButton) {
  const spinner = createSpan({
    className: 'fshBlock fshRelative fshSpinner fshSpinner12',
    style: { height: '15px', width: '136px' },
  });
  replaceChild(spinner, weightButton);
  daRanksView().then(partial(gotRankData, theRows, spinner));
}

function injectWeightButton(theRows, addNewRank) {
  const weightButton = createInput({
    className: 'custombutton',
    type: 'button',
    value: 'Get Rank Weightings',
  });
  onclick(weightButton,
    partial(fetchRankData, theRows, weightButton));
  const theTd = addNewRank.parentNode.parentNode;
  insertHtmlBeforeEnd(theTd, '&nbsp;');
  insertElement(theTd, weightButton);
}

function weightings(theRows) {
  // gather rank info button
  const addNewRank = querySelector('#pCC a[href*="=ranks&subcmd2=add"]');
  if (addNewRank) {
    injectWeightButton(theRows, addNewRank);
  }
}

function rankPosition(direction, rankId) {
  return ranks({ subcmd2: direction, rank_id: rankId });
}

// import { $dataAccess } from './_dataAccess';

function daRankPosition(direction, rankId) {
  // return $dataAccess(rankPosition, moveRank, direction, rankId);
  return rankPosition(direction, rankId);
}

let characterRow;

function notValidRow(thisRankRow, targetRowNum) {
  return characterRow >= Math.min(thisRankRow.rowIndex, targetRowNum)
    || targetRowNum < 1
    || targetRowNum > thisRankRow.parentNode.rows.length;
}

function getTargetRowNumber(val) {
  if (val === 'Up') { return -1; }
  return 2;
}

function getPxScroll(val) {
  if (val === 'Up') { return -22; }
  return 22;
}

function shuffleRows(evt, thisRankRow, targetRowNum) {
  const matchRankId = evt.target.getAttribute('onclick').match(/rank_id=(\d+)/);
  daRankPosition(toLowerCase(evt.target.value), matchRankId[1]);
  const injectRow = thisRankRow.parentNode.rows[targetRowNum];
  insertElementBefore(thisRankRow, injectRow);
  const pxScroll = getPxScroll(evt.target.value);
  window.scrollBy(0, pxScroll);
  evt.stopPropagation();
}

function overrideUpDown(evt) {
  const thisRankRow = evt.target.parentNode.parentNode.parentNode;
  const targetRowNum = thisRankRow.rowIndex
    + getTargetRowNumber(evt.target.value);
  if (notValidRow(thisRankRow, targetRowNum)) { return; }
  shuffleRows(evt, thisRankRow, targetRowNum);
}

function upOrDown(evt) {
  return ['Up', 'Down'].includes(evt.target.value);
}

function ajaxifyRankControls(evt) {
  if (upOrDown(evt)) { overrideUpDown(evt); }
}

function doButtons() {
  if (characterRow && getValue('ajaxifyRankControls')) {
    onclick(pCC, ajaxifyRankControls, true);
  }
}

function setCharacterRow(row, thisRank) {
  if (thisRank && thisRank[1].includes(playerName())) {
    characterRow = row.rowIndex;
  }
}

function findTheRows() {
  const outerTable = pCC.lastElementChild.previousElementSibling;
  if (outerTable.rows && outerTable.rows.length > 7) {
    return arrayFrom(outerTable.rows[7].children[0].children[0].rows);
  }
}

function aRank(rankName, memberRanks) { return memberRanks[0] === rankName; }

function hasMembers(thisRank) { return thisRank && thisRank[1].length > 0; }

function getRankName(row, rankCell) {
  if (row.rowIndex === 1) { return 'Guild Founder'; }
  return getText(rankCell);
}

function writeRanks(memberRanks, row) {
  const rankCell = row.children[0];
  const rankName = getRankName(row, rankCell);
  const thisRank = memberRanks.find(partial(aRank, rankName));
  if (hasMembers(thisRank)) {
    setCharacterRow(row, thisRank);
    insertHtmlBeforeEnd(rankCell, ` <span class="fshBlue">- ${
      thisRank[1].join(', ')}</span>`);
  }
}

function gotMembers(memberRanks) {
  const theRows = findTheRows();
  if (theRows) {
    batch([5, 3, theRows, 1, partial(writeRanks, memberRanks)]);
    weightings(theRows);
    doButtons();
  }
}

function rankArray(acc, ary) {
  const thisRank = acc.find(partial(aRank, ary[1].rank_name));
  if (thisRank) {
    thisRank[1].push(ary[0]);
  } else {
    acc.push([ary[1].rank_name, [ary[0]]]);
  }
  return acc;
}

function makeRanks(json) {
  return entries(json).filter(notLastUpdate).reduce(rankArray, []); // FIXME
}

function injectGuildRanks() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  getMembrList(false).then(makeRanks).then(gotMembers);
}

export default injectGuildRanks;
//# sourceMappingURL=rank-d8ab1fee.js.map
