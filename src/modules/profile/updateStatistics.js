import { defTable } from '../support/constants';
import getArrayByTagName from '../common/getArrayByTagName';
import getElementById from '../common/getElementById';
import getElementsByTagName from '../common/getElementsByTagName';
import getText from '../common/getText';
import setInnerHtml from '../dom/setInnerHtml';
import trim from '../common/trim';

function removeStatTable(el) {
  const tde = getElementsByTagName('td', el);
  setInnerHtml(
    `<span id="${tde[0].id}">${
      trim(tde[0].innerHTML.replace(/&nbsp;/g, ' '))}</span> <div class="profile-stat-bonus">${
      getText(tde[1])}</div>`,
    el.parentNode,
  );
}

export default function updateStatistics() {
  const pLC = getElementById('profileLeftColumn');
  if (pLC) {
    const charStats = getElementsByTagName(defTable, pLC)[0];
    getArrayByTagName(defTable, charStats).forEach(removeStatTable);
  }
}
