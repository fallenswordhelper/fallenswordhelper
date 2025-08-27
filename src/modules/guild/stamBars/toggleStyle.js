import createStyle from '../../common/cElement/createStyle';
import getElementsByTagName from '../../common/getElementsByTagName';
import insertElement from '../../common/insertElement';
import querySelectorArray from '../../common/querySelectorArray';
import regExpGroups from '../../common/regExpGroups';
import { defTable, playerLinkSelector, stamRe } from '../../support/constants';
import { pcc } from '../../support/layout';

let thisStyle = 0;

function getStamPerc(a) {
  const { stam, max } = regExpGroups(stamRe, a.dataset.tipped);
  return Math.min(Math.round((Number(stam) / Number(max)) * 100), 100);
}

function stamBarStyle(a) {
  const perc = getStamPerc(a);

  return (
    '.fshProgressBar ' +
    `tr:nth-child(${a.parentNode.parentNode.rowIndex + 1}) {` +
    `background-image: linear-gradient(to right, rgba(255, 153, 0, 0.5) ${perc}%, ` +
    `transparent ${perc + 1}%)}`
  );
}

function injectStyle() {
  const tables = getElementsByTagName(defTable, pcc());
  const memberList = tables[tables.length - 1];
  const playerLinks = querySelectorArray(playerLinkSelector, memberList);
  if (!playerLinks.length) return;
  const memberLinks = playerLinks.filter((a) => stamRe.test(a.dataset.tipped));
  if (!memberLinks.length) return;
  memberList.classList.add('fshProgressBar');
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
