import { c as createAnchor } from './createAnchor-d07f32b5.js';
import { z as getElementById, i as insertElement, o as onclick, bP as profileUrl, aa as pointsUrl, aF as defSubcmd, bW as blacksmithUrl, bX as dropItemsUrl, a9 as cmdUrl } from './calfSystem-86663d02.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-b16d6c2a.js';
import './insertElementBefore-c2bb9234.js';

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
//# sourceMappingURL=statBar-13f95a4c.js.map
