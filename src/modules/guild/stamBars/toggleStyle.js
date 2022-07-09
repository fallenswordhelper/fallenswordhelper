import createStyle from '../../common/cElement/createStyle';
import getElementsByTagName from '../../common/getElementsByTagName';
import { getPcc } from '../../support/layout';
import insertElement from '../../common/insertElement';
import querySelectorArray from '../../common/querySelectorArray';
import { defTable, playerLinkSelector, stamRe } from '../../support/constants';

let thisStyle = 0;

function getStamPerc(a) {
  const mo = a.dataset.tipped.match(stamRe);
  return Math.min(Math.round((Number(mo[1]) / Number(mo[2])) * 100), 100);
}

function stamBarStyle(a) {
  const perc = getStamPerc(a);
  return '.fshProgressBar '
    + `tr:nth-child(${a.parentNode.parentNode.rowIndex + 1}) {`
    + `background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${perc}%, `
    + `transparent ${perc + 1}%)}`;
}

function injectStyle() {
  const tables = getElementsByTagName(defTable, getPcc());
  const memberList = tables[tables.length - 1];
  memberList.classList.add('fshProgressBar');
  const memberLinks = querySelectorArray(playerLinkSelector, memberList);
  const myTest = memberLinks.map(stamBarStyle).join('\n');
  thisStyle = insertElement(document.body, createStyle(myTest)).sheet;
}

export default function toggleStyle(enableStamBars) {
  if (!thisStyle) {
    injectStyle();
  } else {
    thisStyle.disabled = !enableStamBars;
  }
}
