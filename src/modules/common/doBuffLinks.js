import sendEvent from '../analytics/sendEvent';
import fshOpen from '../chrome/fshOpen';
import { places, quickbuffUrl } from '../support/constants';
import createButton from './cElement/createButton';
import createLi from './cElement/createLi';
import createUl from './cElement/createUl';
import chunk from './chunk';
import insertElement from './insertElement';
import onclick from './onclick';

function getListItem(words, names) {
  const li = createLi();
  const btn = createButton({
    className: 'fshBl fshBls',
    textContent: words,
  });
  onclick(btn, (evt) => {
    evt.target.blur();
    fshOpen(`${quickbuffUrl}&players=${names}`, 'fsQuickBuff', 618, 1000, ',scrollbars');
    sendEvent('doBuffLinks', words);
  });
  insertElement(li, btn);
  return li;
}

function makeButtons(acc, curr, i) {
  insertElement(acc, getListItem(`Buff ${places[i]} 16`, curr.join(',')));
  return acc;
}

export default function doBuffLinks(members) {
  const chunks = chunk(16, members);
  const ul = createUl();
  return chunks.reduce(makeButtons, ul);
}
