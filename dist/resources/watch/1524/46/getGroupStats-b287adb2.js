import { c as chunk } from './chunk-4d4ecad3.js';
import { c as createButton } from './createButton-be35b1eb.js';
import { c as createLi } from './createLi-50018cbe.js';
import { c as createUl } from './createUl-374fe601.js';
import { o as onclick, T as sendEvent, i as insertElement, bl as places, t as createDocument, aL as retryAjax } from './calfSystem-86663d02.js';
import { o as openQuickBuffByName } from './openQuickBuffByName-cb406237.js';
import { g as groupViewStats } from './groupViewStats-9b2c1443.js';

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
//# sourceMappingURL=getGroupStats-b287adb2.js.map
