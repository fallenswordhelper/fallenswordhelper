import { c as chunk } from './chunk-eb7f7c4d.js';
import { c as createButton } from './createButton-bd777447.js';
import { c as createLi } from './createLi-da5d4a6f.js';
import { c as createUl } from './createUl-d71a8212.js';
import { o as onclick, Y as sendEvent, i as insertElement, ba as places, t as createDocument, aA as retryAjax } from './calfSystem-6840a38e.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-2320ddfb.js';
import { g as groupViewStats } from './groupViewStats-dbf35e7e.js';

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
//# sourceMappingURL=getGroupStats-8c4737cf.js.map
