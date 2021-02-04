import { x as jQueryNotPresent, o as onclick, p as pCC, f as insertHtmlBeforeEnd, D as querySelector, ay as infoBoxFrom, az as retryAjax, A as setInnerHtml, s as partial, m as getArrayByTagName, R as clickThis } from './calfSystem-cc2b30b5.js';
import { c as closestTable } from './closestTable-b5c062f5.js';
import { d as dialog } from './dialog-fd1181f5.js';
import './closest-8b679b7a.js';
import './dialogMsg-fcad563e.js';

function translateReturnInfo(data) {
  const info = infoBoxFrom(data);
  let returnInfo = { r: 1, m: info };
  if (info === 'Item was transferred to the guild store!') {
    returnInfo = { r: 0, m: '' };
  }
  return returnInfo;
}

function guildMailboxTake(href) {
  return retryAjax(href).then(translateReturnInfo).then(dialog);
}

function takeResult(target, data) {
  if (data.r === 0) {
    setInnerHtml('<span class="fshGreen">Taken</span>',
      closestTable(target).nextElementSibling.rows[0].cells[0]);
  }
}

function guildMailboxEvent(e) { // jQuery.min
  const { target } = e;
  if (target.tagName === 'IMG') {
    e.preventDefault();
    const anchor = target.parentNode.href;
    guildMailboxTake(anchor).then(partial(takeResult, target));
  }
  if (target.className === 'sendLink') {
    getArrayByTagName('img', pCC).forEach(clickThis);
  }
}

function guildMailbox() {
  if (jQueryNotPresent()) { return; }
  onclick(pCC, guildMailboxEvent);
  insertHtmlBeforeEnd(querySelector('#pCC td[height="25"]'),
    '<span class="sendLink">Take All</span>');
}

export default guildMailbox;
//# sourceMappingURL=guildMailbox-aa7338e1.js.map
