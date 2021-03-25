import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-b80e2739.js';
import { z as getElementById, B as setInnerHtml, v as guildSubcmdUrl, F as querySelectorArray, aw as contains } from './calfSystem-6840a38e.js';
import './getArrayByClassName-8e96c4f0.js';
import './hideElement-4575b6b4.js';
import './openQuickBuffByName-2320ddfb.js';
import './fshOpen-3161ad53.js';
import './selfIdIs-eddd6be5.js';

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
//# sourceMappingURL=addGuildInfoWidgets-4751fa75.js.map
