import { c as chunk } from './chunk-c6dcf4eb.js';
import { c as createButton } from './createButton-3b49eb74.js';
import { c as createLi } from './createLi-11bb1a9b.js';
import { c as createUl } from './createUl-0ac7347d.js';
import { o as onclick, X as sendEvent, i as insertElement, b9 as places, t as createDocument, az as retryAjax } from './calfSystem-cc2b30b5.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-9466cf44.js';
import { g as groupViewStats } from './groupViewStats-eec6f6db.js';

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
//# sourceMappingURL=getGroupStats-dee94d1b.js.map
