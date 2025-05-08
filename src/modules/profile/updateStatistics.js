import createStyle from '../common/cElement/createStyle';
import getElementsByTagName from '../common/getElementsByTagName';
import getTextTrim from '../common/getTextTrim';
import insertElementBefore from '../common/insertElementBefore';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import trim from '../common/trim';
import setInnerHtml from '../dom/setInnerHtml';
import { defTable } from '../support/constants';

const statStyle = `.profile-stat-bonus { font-size: x-small; }
.fshCharStats { table-layout: fixed; }
.fshCharStats td:first-of-type { width: 22%; }
.fshCharStats td:nth-of-type(2) { width: 25%; }
.fshCharStats td:nth-of-type(3) { width: 18%; }
.fshCharStats td:nth-of-type(4) { width: 35%; }`;

function statBonus(td) {
  const tdText = getTextTrim(td);
  return tdText ? ` <div class="profile-stat-bonus">${tdText}</div>` : '';
}

function removeStatTable(tbl) {
  const [td1, td2] = getElementsByTagName('td', tbl);
  setInnerHtml(
    `<span id="${td1.id}">${trim(td1.innerHTML.replace(/&nbsp;/g, ' '))}</span>${statBonus(td2)}`,
    tbl.parentNode,
  );
}

const removeAttr = (root, el, attr) => querySelectorArray(`${el}[${attr}]`, root)
  .forEach((l) => l.removeAttribute(attr));

function cleanTable(charStats) {
  removeAttr(charStats, 'tr', 'style');
  removeAttr(charStats, 'td', 'width');
  querySelector('td[colspan]', charStats)?.removeAttribute('colspan');
}

function updateCharStats(charStats) {
  charStats.classList.add('fshCharStats');
  cleanTable(charStats);
  querySelectorArray(defTable, charStats).forEach(removeStatTable);
  insertElementBefore(createStyle(statStyle), charStats);
}

export default function updateStatistics() {
  const charStats = querySelector('#profileLeftColumn table');
  if (charStats) updateCharStats(charStats);
}
