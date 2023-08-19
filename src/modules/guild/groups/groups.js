import getMembrList from '../../ajax/getMembrList';
import insertHtmlBeforeBegin from '../../common/insertHtmlBeforeBegin';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import querySelector from '../../common/querySelector';
import querySelectorArray from '../../common/querySelectorArray';
import getValue from '../../system/getValue';
import doGroupPaint from './doGroupPaint';
import groupButtons from './groupButtons';

function displayMinGroupLevel() {
  const minGroupLevel = getValue('minGroupLevel');
  if (minGroupLevel) {
    const groupTable = querySelector('#pCC table[width="650"]');
    insertHtmlBeforeBegin(
      querySelector('br', groupTable),
      `<span class="fshBlue"> Current Min Level Setting: ${minGroupLevel}</span>`,
    );
  }
}

function fixTable() {
  // Cows don't add!
  const tds = querySelectorArray('#pCC td.header-dark');
  if (tds.length < 5) { return; }
  tds[0].setAttribute('width', '20%');
  tds[1].setAttribute('width', '44%');
  tds[2].setAttribute('width', '7%');
  tds[3].setAttribute('width', '22%');
  tds[4].setAttribute('width', '7%');
}

export default async function groups() {
  if (jQueryNotPresent()) return;
  const joinAll = querySelector('#pCC input[value="Join All Available Groups"]');
  if (!joinAll) return;
  const membrListPrm = getMembrList(false);
  displayMinGroupLevel();
  groupButtons(joinAll);
  fixTable();
  const membrList = await membrListPrm;
  if (membrList) doGroupPaint(membrList);
}
