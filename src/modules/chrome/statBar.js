import sendEvent from '../analytics/sendEvent';
import createAnchor from '../common/cElement/createAnchor';
import getElementById from '../common/getElementById';
import insertElement from '../common/insertElement';
import insertElementAfterBegin from '../common/insertElementAfterBegin';
import onclick from '../common/onclick';
import partial from '../common/partial';
import {
  blacksmithUrl,
  cmdUrl,
  defSubcmd,
  dropItemsUrl,
  pointsUrl,
  profileUrl,
} from '../support/constants';

function preventHcs(id, evt) {
  evt.stopPropagation();
  sendEvent('chrome', 'statbar', id);
}

function statbarWrapper(href, id) {
  const character = getElementById(`statbar-${id}`);
  if (!character) {
    return;
  }
  const myWrapper = createAnchor({ href });
  const statWrapper = character.parentNode;
  insertElement(myWrapper, character);
  insertElementAfterBegin(statWrapper, myWrapper);
  onclick(myWrapper, partial(preventHcs, id), true);
}

export default function statbar() {
  statbarWrapper(profileUrl, 'character');
  statbarWrapper(`${pointsUrl + defSubcmd}reserve`, 'stamina');
  statbarWrapper(blacksmithUrl, 'equipment');
  statbarWrapper(dropItemsUrl, 'inventory');
  statbarWrapper(pointsUrl, 'fsp');
  statbarWrapper(`${cmdUrl}bank`, 'gold');
}
