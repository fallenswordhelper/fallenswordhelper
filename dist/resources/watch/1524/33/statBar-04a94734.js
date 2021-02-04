import { c as createAnchor } from './createAnchor-46200363.js';
import { y as getElementById, i as insertElement, o as onclick, bJ as profileUrl, a9 as pointsUrl, ar as defSubcmd, bS as blacksmithUrl, bT as dropItemsUrl, a8 as cmdUrl } from './calfSystem-cc2b30b5.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7ae9ae7a.js';
import './insertElementBefore-0a7f2602.js';

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
//# sourceMappingURL=statBar-04a94734.js.map
