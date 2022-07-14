import contains from '../../common/contains';
import getElementById from '../../common/getElementById';
import querySelectorArray from '../../common/querySelectorArray';
import setInnerHtml from '../../dom/setInnerHtml';
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

function makeLink(el) {
  setInnerHtml(`<a href="${guildSubcmdUrl}chat">Chat</a>`, el);
}

function updateChatLink() {
  querySelectorArray('#pCR h4').filter(contains('Chat')).forEach(makeLink);
}

export default function addGuildInfoWidgets() {
  const guildMembrList = getElementById('minibox-guild-members-list');
  if (!guildMembrList) { return; } // list exists
  // hide guild info links
  doHideBtn(guildMembrList, 1);
  doHideBuffSelected(guildMembrList, 'guild');
  // add coloring for offline time
  colouring(guildMembrList, guildColour);
  updateChatLink();
}
