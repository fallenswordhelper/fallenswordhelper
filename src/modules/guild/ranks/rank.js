import daRanksView from '../../_dataAccess/daRanksView';
import arrayFrom from '../../common/arrayFrom';
import batch from '../../common/batch';
import getText from '../../common/getText';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import partial from '../../common/partial';
import { getPcc } from '../../support/layout';
import { doButtons, setCharacterRow } from './doButtons';
import weightings from './weightings';

function findTheRows() {
  const theRows = getPcc().lastElementChild.previousElementSibling.rows
    ?.[7]?.children[0]?.children[0]?.rows;
  if (theRows) {
    return arrayFrom(theRows);
  }
}

function writeRanks(memberRanks, row) {
  const rankCell = row.children[0];
  const rankName = getText(rankCell);
  const thisRank = memberRanks.find((r) => r.name === rankName);
  if (thisRank?.members.length) {
    const members = thisRank.members.map((m) => m.name);
    setCharacterRow(row, members);
    insertHtmlBeforeEnd(rankCell, ` <span class="fshBlue">- ${members.join(', ')}</span>`);
  }
}

function gotMembers(memberRanks) {
  const theRows = findTheRows();
  if (theRows) {
    batch([3, theRows, 1, partial(writeRanks, memberRanks)]);
    weightings(theRows, memberRanks);
    doButtons();
  }
}

export default async function rank() {
  if (jQueryNotPresent()) { return; }
  const json = await daRanksView();
  if (json?.s) { gotMembers(json.r); }
}
