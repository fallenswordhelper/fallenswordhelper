import sendEvent from '../analytics/sendEvent';
import { defSubcmd, guideUrl } from '../support/constants';
import createAnchor from './cElement/createAnchor';
import insertElement from './insertElement';
import insertElementBefore from './insertElementBefore';
import itemIdFromImg from './itemIdFromImg';
import onclick from './onclick';

export function makeGuideItemAnchor(eventSource, itemId) {
  const thisAnchor = createAnchor({
    href: `${guideUrl}items${defSubcmd}view&item_id=${itemId}`,
    target: '_blank',
  });
  onclick(thisAnchor, () => sendEvent(eventSource, 'Ufsg link'));
  return thisAnchor;
}

export function ufsgItemLink(eventSource, img) {
  const itemId = itemIdFromImg(img);
  if (!itemId) return;
  const myLink = makeGuideItemAnchor(eventSource, itemId);
  insertElementBefore(myLink, img);
  insertElement(myLink, img);
}
