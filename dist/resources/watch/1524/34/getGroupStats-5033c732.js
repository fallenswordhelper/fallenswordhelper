import { c as chunk } from './chunk-5d7e6f3a.js';
import { c as createButton } from './createButton-dae4ac97.js';
import { c as createLi } from './createLi-aa5581c5.js';
import { c as createUl } from './createUl-bc2dd210.js';
import { o as onclick, X as sendEvent, i as insertElement, b9 as places, t as createDocument, az as retryAjax } from './calfSystem-d1de1997.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-4d416c22.js';
import { g as groupViewStats } from './groupViewStats-c70a385f.js';

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
//# sourceMappingURL=getGroupStats-5033c732.js.map
