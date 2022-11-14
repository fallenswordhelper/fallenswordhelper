import './weightings.css';
import sendEvent from '../../analytics/sendEvent';
import bitwiseAnd from '../../common/bitwiseAnd';
import createButton from '../../common/cElement/createButton';
import createSpan from '../../common/cElement/createSpan';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import once from '../../common/once';
import partial from '../../common/partial';
import querySelector from '../../common/querySelector';
import roundToString from '../../common/roundToString';
import sum from '../../common/sum';

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

const sumWeights = (a, [, weight]) => a + weight - 1;
const getWeighted = (perms) => privLookup
  .filter(([flag]) => bitwiseAnd(perms, flag))
  .reduce(sumWeights, 0);
const unsignedShiftZero = (signed) => signed >>> 0; // eslint-disable-line no-bitwise
const toBinary = (number) => unsignedShiftZero(number).toString(2);
const addBits = (number) => toBinary(number).split('').map(Number).reduce(sum, 0);
const calcPermWeight = (perms) => roundToString(getWeighted(perms) + addBits(perms), 1);

function parseRankData(memberRanks, row) {
  // Makes a weighted calculation of available permissions and gets tax rate
  const [rankCell] = row.children;
  const rankName = getText(rankCell.firstChild); // Text Node
  const thisRank = memberRanks.find((r) => r && r.name === rankName);
  if (thisRank) {
    insertHtmlAfterBegin(rankCell, `<span class="fshBlue">(${
      calcPermWeight(thisRank.permissions)
    }) Tax:(${thisRank.tax || 0}%)</span> `);
  }
}

function fetchRankData(theRows, memberRanks) {
  sendEvent('ranks', 'fetchRankData');
  theRows.forEach(partial(parseRankData, memberRanks));
}

function injectWeightButton(theRows, memberRanks, addNewRank) {
  const container = createSpan({ className: 'fsh-weightings', innerHTML: '[ ' });
  const weightButton = createButton({
    className: 'fshBl fsh-bli',
    textContent: 'Get Rank Weightings',
    type: 'button',
  });
  once(weightButton, partial(fetchRankData, theRows, memberRanks));
  insertElement(container, weightButton);
  insertHtmlBeforeEnd(container, ' ]');
  const theTd = addNewRank.parentNode.parentNode;
  insertElement(theTd, container);
}

export default function weightings(theRows, memberRanks) {
  // gather rank info button
  const addNewRank = querySelector('#pCC a[href*="=ranks&subcmd2=add"]');
  if (addNewRank) injectWeightButton(theRows, memberRanks, addNewRank);
}
