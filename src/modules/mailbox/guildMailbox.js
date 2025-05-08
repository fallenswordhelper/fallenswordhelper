import dialog from '../ajax/dialog';
import retryAjax from '../ajax/retryAjax';
import sendEvent from '../analytics/sendEvent';
import clickThis from '../common/clickThis';
import closestTable from '../common/closestTable';
import getArrayByTagName from '../common/getArrayByTagName';
import infoBoxFrom from '../common/InfoBoxFrom';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import { pcc } from '../support/layout';

function translateReturnInfo(data) {
  const info = infoBoxFrom(data);
  let returnInfo = { r: 1, m: info };
  if (info === 'Item was transferred to the guild store!') {
    returnInfo = { r: 0, m: '' };
  }
  return returnInfo;
}

async function guildMailboxTake(href) {
  const data = await retryAjax(href);
  const returnInfo = translateReturnInfo(data);
  return dialog(returnInfo);
}

function takeResult(target, data) {
  if (data.r === 0) {
    setInnerHtml(
      '<span class="fshGreen">Taken</span>',
      closestTable(target).nextElementSibling.rows[0].cells[0],
    );
  }
}

async function guildMailboxEvent(e) {
  const { target } = e;
  if (target.tagName === 'IMG') {
    e.preventDefault();
    sendEvent('guildMailbox', 'Take Item');
    const anchor = target.parentNode.href;
    const data = await guildMailboxTake(anchor);
    takeResult(target, data);
  }
  if (target.className === 'sendLink') getArrayByTagName('img', pcc()).forEach(clickThis);
}

export default function guildMailbox() {
  if (jQueryNotPresent()) return;
  onclick(pcc(), guildMailboxEvent);
  insertHtmlBeforeEnd(
    querySelector('#pCC td[height="25"]'),
    '<span class="sendLink">Take All</span>',
  );
}
