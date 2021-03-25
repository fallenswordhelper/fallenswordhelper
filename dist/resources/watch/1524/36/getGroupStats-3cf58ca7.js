import { c as chunk } from './chunk-eaa75fd1.js';
import { c as createButton } from './createButton-580ac84d.js';
import { c as createLi } from './createLi-9cdcd9da.js';
import { c as createUl } from './createUl-7d1b744f.js';
import { o as onclick, Y as sendEvent, i as insertElement, ba as places, t as createDocument, aA as retryAjax } from './calfSystem-c08399e5.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-2ba6a39d.js';
import { g as groupViewStats } from './groupViewStats-fd1a555b.js';

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
//# sourceMappingURL=getGroupStats-3cf58ca7.js.map
