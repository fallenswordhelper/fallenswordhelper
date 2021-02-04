import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-18c2e2dc.js';
import { y as getElementById, A as setInnerHtml, v as guildSubcmdUrl, E as querySelectorArray, at as contains } from './calfSystem-cc2b30b5.js';
import './getArrayByClassName-b85e26fa.js';
import './hideElement-eb117e0e.js';
import './openQuickBuffByName-9466cf44.js';
import './fshOpen-946a9f05.js';
import './selfIdIs-3252f988.js';

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

function addGuildInfoWidgets() {
  const guildMembrList = getElementById('minibox-guild-members-list');
  if (!guildMembrList) { return; } // list exists
  // hide guild info links
  doHideBtn(guildMembrList, 1);
  doHideBuffSelected(guildMembrList, 'guild');
  // add coloring for offline time
  colouring(guildMembrList, guildColour);
  updateChatLink();
}

export default addGuildInfoWidgets;
//# sourceMappingURL=addGuildInfoWidgets-2cf421a8.js.map
