import arrayFrom from '../../common/arrayFrom';
import batch from '../../common/batch';
import entries from '../../common/entries';
import fromEntries from '../../common/fromEntries';
import getMembrList from '../../ajax/getMembrList';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import notLastUpdate from '../../common/notLastUpdate';
import { pCC } from '../../support/layout';
import partial from '../../common/partial';
import uniq from '../../common/uniq';
import values from '../../common/values';
import weightings from './weightings';
import { doButtons, setCharacterRow } from './doButtons';

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

function makeRanks(json) {
  const members = values(fromEntries(entries(json).filter(notLastUpdate)));
  return uniq(members.map((m) => m.rank_name))
    .map((r) => [
      r,
      members.filter((m) => m.rank_name === r).map((m) => m.username),
    ]);
}

export default function rank() { // jQuery.min
  if (jQueryNotPresent()) { return; }
  getMembrList(false).then(makeRanks).then(gotMembers);
}
