import { c as chunk } from './chunk-4bfbd415.js';
import { c as createButton } from './createButton-e9448062.js';
import { c as createLi } from './createLi-b292a201.js';
import { c as createUl } from './createUl-6253218d.js';
import { o as onclick, U as sendEvent, i as insertElement, bh as places, t as createDocument, aI as retryAjax } from './calfSystem-476ab75d.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-6e48651f.js';
import { g as groupViewStats } from './groupViewStats-61ec8592.js';

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

function doBuffLinks(members) {
  const chunks = chunk(16, members);
  const ul = createUl();
  if (chunks.length > 1) {
    insertElement(ul, getListItem('Buff All', members.join(',')));
  }
  return chunks.reduce(makeButtons, ul);
}

function parseGroupStats(html) {
  const doc = createDocument(html);
  return groupViewStats(doc);
}

function getGroupStats(viewStats) {
  return retryAjax(viewStats).then(parseGroupStats);
}

export { doBuffLinks as d, getGroupStats as g };
//# sourceMappingURL=getGroupStats-88690185.js.map
