import { c as createAnchor } from './createAnchor-76045f8f.js';
import { z as getElementById, i as insertElement, o as onclick, bP as profileUrl, aa as pointsUrl, aF as defSubcmd, bW as blacksmithUrl, bX as dropItemsUrl, a9 as cmdUrl } from './calfSystem-02fd040d.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-21fe50bb.js';
import './insertElementBefore-c442a2a7.js';

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
//# sourceMappingURL=statBar-baa3b19c.js.map
