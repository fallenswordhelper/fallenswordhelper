import { g as getElementsByTagName, z as getElementById, d as defTable, m as getArrayByTagName, B as setInnerHtml, C as getText } from './calfSystem-c08399e5.js';

function removeStatTable(el) {
  const tde = getElementsByTagName('td', el);
  setInnerHtml(`<span id="${tde[0].id}">${
    tde[0].innerHTML.replace(/&nbsp;/g, ' ').trim()}</span> `
    + `<div class="profile-stat-bonus">${getText(tde[1])}</div>`,
  el.parentNode);
}

function updateStatistics() {
  const charStats = getElementsByTagName(defTable,
    getElementById('profileLeftColumn'))[0];
  getArrayByTagName(defTable, charStats).forEach(removeStatTable);
}

export default updateStatistics;
//# sourceMappingURL=updateStatistics-0f089b67.js.map
