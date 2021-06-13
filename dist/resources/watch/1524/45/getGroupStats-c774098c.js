import { c as chunk } from './chunk-82057567.js';
import { c as createButton } from './createButton-ff027207.js';
import { c as createLi } from './createLi-27d77f7a.js';
import { c as createUl } from './createUl-528f112d.js';
import { o as onclick, T as sendEvent, i as insertElement, bl as places, t as createDocument, aL as retryAjax } from './calfSystem-02fd040d.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-2e9d4b7d.js';
import { g as groupViewStats } from './groupViewStats-698b5506.js';

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
//# sourceMappingURL=getGroupStats-c774098c.js.map
