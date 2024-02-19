import sendEvent from '../../analytics/sendEvent';
import createAnchor from '../../common/cElement/createAnchor';
import contains from '../../common/contains';
import getElementById from '../../common/getElementById';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import { guildSubcmdUrl } from '../../support/constants';
import colouring from './colouring';
import contactColour from './contactColour';
import doHideBtn from './doHideBtn';
import doHideBuffSelected from './doHideBuffSelected';

function guildColour(el) {
  contactColour(el, {
    l1: 'fshGreen',
    l2: 'fshWhite',
    l3: 'fshGrey',
  });
}

function makeLink(hNo, word, page) {
  querySelectorArray(`#pCR h${hNo}`).filter(contains(word)).forEach((el) => {
    const anchor = createAnchor({ href: `${guildSubcmdUrl}${page}`, textContent: word });
    onclick(anchor, () => { sendEvent('widgets', `guild ${page}`); });
    el.replaceChild(anchor, el.firstChild);
  });
}

export default function addGuildInfoWidgets() {
  const guildMembrList = getElementById('minibox-guild-members-list');
  if (!guildMembrList) { return; } // list exists
  // hide guild info links
  doHideBtn(guildMembrList, 1);
  doHideBuffSelected(guildMembrList, 'guild');
  // add coloring for offline time
  colouring(guildMembrList, guildColour);
  makeLink(4, 'Chat', 'chat');
  makeLink(3, 'Guild', 'manage');
}
