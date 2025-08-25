import sendEvent from '../analytics/sendEvent';
import createAnchor from '../common/cElement/createAnchor';
import currentGuildId from '../common/currentGuildId';
import getElementById from '../common/getElementById';
import insertElement from '../common/insertElement';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import { scouttowerUrl } from '../support/constants';
import getValue from '../system/getValue';
import { cdn } from '../system/system';

function scoutLink() {
  const sl = createAnchor({
    dataset: { tooltip: 'View Scout Report' },
    href: scouttowerUrl,
    innerHTML: `<img id="fshScoutTower" src="${cdn}structures/27.png">`,
  });
  onclick(sl, () => sendEvent('chrome', 'scout tower link'));
  return sl;
}

export default function scoutTowerLink() {
  if (!getValue('addScoutTowerLink') || !currentGuildId()) return;
  const spoils = getElementById('minibox-spoilsofwar');
  if (!spoils) return;
  const content = spoils.children[1];
  if (!content) return;
  const parent = content.children[0];
  insertHtmlBeforeEnd(parent, '&nbsp;');
  insertElement(parent, scoutLink());
}
