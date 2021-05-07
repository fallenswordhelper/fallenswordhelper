import { c as createAnchor } from './createAnchor-8f48c642.js';
import { z as getElementById, i as insertElement, o as onclick, bL as profileUrl, ab as pointsUrl, aC as defSubcmd, bU as blacksmithUrl, bV as dropItemsUrl, aa as cmdUrl } from './calfSystem-476ab75d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7c55ba28.js';
import './insertElementBefore-23d4e956.js';

function preventHcs(evt) {
  evt.stopPropagation();
}

function statbarWrapper(href, id) {
  const character = getElementById(`statbar-${id}`);
  if (!character) { return; }
  const myWrapper = createAnchor({ href });
  const statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, preventHcs, true);
}

function statbar() {
  statbarWrapper(profileUrl, 'character');
  statbarWrapper(`${pointsUrl + defSubcmd}reserve`, 'stamina');
  statbarWrapper(blacksmithUrl, 'equipment');
  statbarWrapper(dropItemsUrl, 'inventory');
  statbarWrapper(pointsUrl, 'fsp');
  statbarWrapper(`${cmdUrl}bank`, 'gold');
}

export default statbar;
//# sourceMappingURL=statBar-6b72319d.js.map
