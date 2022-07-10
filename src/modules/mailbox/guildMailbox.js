import dialog from '../ajax/dialog';
import retryAjax from '../ajax/retryAjax';
import clickThis from '../common/clickThis';
import closestTable from '../common/closestTable';
import getArrayByTagName from '../common/getArrayByTagName';
import infoBoxFrom from '../common/InfoBoxFrom';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import jQueryNotPresent from '../common/jQueryNotPresent';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import setInnerHtml from '../dom/setInnerHtml';
import { getPcc } from '../support/layout';

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
    setInnerHtml(
      '<span class="fshGreen">Taken</span>',
      closestTable(target).nextElementSibling.rows[0].cells[0],
    );
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
    getArrayByTagName('img', getPcc()).forEach(clickThis);
  }
}

export default function guildMailbox() {
  if (jQueryNotPresent()) { return; }
  onclick(getPcc(), guildMailboxEvent);
  insertHtmlBeforeEnd(
    querySelector('#pCC td[height="25"]'),
    '<span class="sendLink">Take All</span>',
  );
}
