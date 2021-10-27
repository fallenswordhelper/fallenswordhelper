import bitwiseAnd from '../../common/bitwiseAnd';
import createInput from '../../common/cElement/createInput';
import createSpan from '../../common/cElement/createSpan';
import daRanksView from '../../_dataAccess/daRanksView';
import getText from '../../common/getText';
import insertElement from '../../common/insertElement';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import querySelector from '../../common/querySelector';
import replaceChild from '../../common/replaceChild';
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
    theRows.forEach(partial(parseRankData, json.r));
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

export default function weightings(theRows) {
  // gather rank info button
  const addNewRank = querySelector('#pCC a[href*="=ranks&subcmd2=add"]');
  if (addNewRank) {
    injectWeightButton(theRows, addNewRank);
  }
}
