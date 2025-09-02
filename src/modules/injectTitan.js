import sendEvent from './analytics/sendEvent';
import createAnchor from './common/cElement/createAnchor';
import createDiv from './common/cElement/createDiv';
import currentGuildId from './common/currentGuildId';
import insertElement from './common/insertElement';
import insertTextBeforeEnd from './common/insertTextBeforeEnd';
import onclick from './common/onclick';
import partial from './common/partial';
import querySelectorAll from './common/querySelectorAll';
import { ufsgLinkFromImg } from './common/ufsgMonsterLink';
import { scouttowerUrl } from './support/constants';
import { pcc } from './support/layout';

function scoutTowerLink() {
  if (!currentGuildId()) return;
  const aLink = createAnchor({
    href: scouttowerUrl,
    textContent: 'Scout Tower',
  });
  onclick(aLink, () => sendEvent('titan', 'scout tower'));
  const cDiv = createDiv({ className: 'fshBold fshCenter', textContent: '[ ' });
  insertElement(cDiv, aLink);
  insertTextBeforeEnd(cDiv, ' ]');
  insertElement(pcc().children[0].rows[2].cells[0], cDiv);
}

function ufsgLinks() {
  querySelectorAll('#pCC table table img[src*="/creatures/"]').forEach(
    partial(ufsgLinkFromImg, 'titan-log'),
  );
}

export default function injectTitan() {
  if (!pcc()) return;
  scoutTowerLink();
  ufsgLinks();
}
