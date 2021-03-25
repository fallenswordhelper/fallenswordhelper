import { c as createAnchor } from './createAnchor-02525368.js';
import { z as getElementById, i as insertElement, o as onclick, bL as profileUrl, ab as pointsUrl, au as defSubcmd, bU as blacksmithUrl, bV as dropItemsUrl, aa as cmdUrl } from './calfSystem-6840a38e.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7817ee91.js';
import './insertElementBefore-656c48d5.js';

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
//# sourceMappingURL=statBar-a1f72f8c.js.map
