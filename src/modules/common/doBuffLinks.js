import chunk from './chunk';
import createButton from './cElement/createButton';
import createLi from './cElement/createLi';
import createUl from './cElement/createUl';
import insertElement from './insertElement';
import onclick from './onclick';
import openQuickBuffByName from './openQuickBuffByName';
import { places } from '../support/constants';
import sendEvent from '../analytics/sendEvent';

function getListItem(words, names) {
  const li = createLi();
  const btn = createButton({
    className: 'fshBl fshBls',
    textContent: words,
  });
  onclick(btn, (evt) => {
    evt.target.blur();
    openQuickBuffByName(names);
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
  if (chunks.length > 1) {
    insertElement(ul, getListItem('Buff All', members.join(',')));
  }
  return chunks.reduce(makeButtons, ul);
}
