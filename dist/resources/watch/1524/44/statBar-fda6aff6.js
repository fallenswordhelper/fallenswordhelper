import { c as createAnchor } from './createAnchor-8d83cd6d.js';
import { z as getElementById, i as insertElement, o as onclick, bN as profileUrl, aa as pointsUrl, aE as defSubcmd, bU as blacksmithUrl, bV as dropItemsUrl, a9 as cmdUrl } from './calfSystem-23094c64.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-8efe6da6.js';
import './insertElementBefore-7c440c87.js';

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
//# sourceMappingURL=statBar-fda6aff6.js.map
