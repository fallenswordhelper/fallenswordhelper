import getElementById from '../common/getElementById';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import { scouttowerUrl } from '../support/constants';
import { cdn } from '../system/system';

export default function scoutTowerLink() {
  const spoils = getElementById('minibox-spoilsofwar');
  if (!spoils) { return; }
  const content = spoils.children[1];
  if (!content) { return; }
  const parent = content.children[0];
  insertHtmlBeforeEnd(parent, `&nbsp;<a href="${
    scouttowerUrl}" data-tooltip="View Scout Report"><img id="fshScoutTower" src="${
    cdn}/structures/27.png"></a>`);
}
