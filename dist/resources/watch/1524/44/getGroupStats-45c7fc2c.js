import { c as chunk } from './chunk-d354fb99.js';
import { c as createButton } from './createButton-795b08d9.js';
import { c as createLi } from './createLi-fdbfcc2e.js';
import { c as createUl } from './createUl-2133245e.js';
import { o as onclick, T as sendEvent, i as insertElement, bj as places, t as createDocument, aK as retryAjax } from './calfSystem-23094c64.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-1567af36.js';
import { g as groupViewStats } from './groupViewStats-0485b3d0.js';

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
//# sourceMappingURL=getGroupStats-45c7fc2c.js.map
