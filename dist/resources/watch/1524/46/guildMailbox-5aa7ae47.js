import { y as jQueryNotPresent, o as onclick, p as pCC, f as insertHtmlBeforeEnd, E as querySelector, w as infoBoxFrom, aL as retryAjax, B as setInnerHtml, s as partial, m as getArrayByTagName, R as clickThis } from './calfSystem-86663d02.js';
import { c as closestTable } from './closestTable-dcef30f0.js';
import { d as dialog } from './dialog-16fed349.js';
import './closest-d38ca7fc.js';
import './dialogMsg-16959bc2.js';

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
//# sourceMappingURL=guildMailbox-5aa7ae47.js.map
