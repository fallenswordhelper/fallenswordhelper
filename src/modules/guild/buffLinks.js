import sendEvent from '../analytics/sendEvent';
import batch from '../common/batch';
import getPlayerId from '../common/getPlayerId';
import hrefStartsWith from '../common/hrefStartsWith';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import openQuickBuffById from '../common/openQuickBuffById';
import querySelectorArray from '../common/querySelectorArray';
import { playerIdUrl } from '../support/constants';
import { pcc } from '../support/layout';

function insertBuffLink(el) {
  insertHtmlBeforeEnd(el.parentNode, ' <span class="smallLink">[b]</span>');
}

function openQuickBuff(evt) {
  if (evt.target.className !== 'smallLink') {
    return;
  }
  sendEvent('guild', 'buffLinks');
  openQuickBuffById(getPlayerId(evt.target.previousElementSibling.href));
}

export default function buffLinks() {
  const members = querySelectorArray('#pCC a').filter(
    hrefStartsWith(playerIdUrl),
  );
  batch([3, members, 0, insertBuffLink]);
  onclick(pcc(), openQuickBuff);
}
