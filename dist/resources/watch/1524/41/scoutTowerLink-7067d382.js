import { z as getElementById, f as insertHtmlBeforeEnd, W as scouttowerUrl, ax as cdn } from './calfSystem-6b7d7ae6.js';

function scoutTowerLink() {
  const spoils = getElementById('minibox-spoilsofwar');
  if (spoils) {
    const parent = spoils.children[1].children[0];
    insertHtmlBeforeEnd(parent, `&nbsp;<a href="${scouttowerUrl
    }" class="tip-static" data-tipped="View Scout Report">`
      + '<img id="fshScoutTower" '
      + `src="${cdn}/structures/27.png"></a>`);
  }
}

export default scoutTowerLink;
//# sourceMappingURL=scoutTowerLink-7067d382.js.map