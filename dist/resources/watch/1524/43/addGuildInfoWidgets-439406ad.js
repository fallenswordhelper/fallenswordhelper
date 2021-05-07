import { d as doHideBtn, a as doHideBuffSelected, c as colouring, b as contactColour } from './doHideBuffSelected-c81a78bf.js';
import { z as getElementById, B as setInnerHtml, v as guildSubcmdUrl, F as querySelectorArray, aE as contains } from './calfSystem-476ab75d.js';
import './getArrayByClassName-4f67343e.js';
import './hideElement-0d0f9065.js';
import './openQuickBuffByName-6e48651f.js';
import './fshOpen-72d27290.js';
import './selfIdIs-58c69d52.js';

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
//# sourceMappingURL=addGuildInfoWidgets-439406ad.js.map
