import { c as chunk } from './chunk-f573f88c.js';
import { c as createButton } from './createButton-2d755a99.js';
import { c as createLi } from './createLi-a00d43ac.js';
import { c as createUl } from './createUl-8d700944.js';
import { o as onclick, Y as sendEvent, i as insertElement, bg as places, t as createDocument, aH as retryAjax } from './calfSystem-d5c49dc8.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-cf6100f7.js';
import { g as groupViewStats } from './groupViewStats-97d637ca.js';

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
//# sourceMappingURL=getGroupStats-acb9074d.js.map
