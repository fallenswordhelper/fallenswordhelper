import { c as createAnchor } from './createAnchor-0401add1.js';
import { y as getElementById, i as insertElement, o as onclick, bJ as profileUrl, a9 as pointsUrl, ar as defSubcmd, bS as blacksmithUrl, bT as dropItemsUrl, a8 as cmdUrl } from './calfSystem-d1de1997.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-9cc685b5.js';
import './insertElementBefore-9e5d02cd.js';

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
//# sourceMappingURL=statBar-447a2105.js.map
