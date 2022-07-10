import batch from '../common/batch';
import getPlayerId from '../common/getPlayerId';
import insertHtmlBeforeEnd from '../common/insertHtmlBeforeEnd';
import onclick from '../common/onclick';
import openQuickBuffById from '../common/openQuickBuffById';
import querySelectorAll from '../common/querySelectorAll';
import { playerIdUrl } from '../support/constants';
import { getPcc } from '../support/layout';

function insertBuffLink(el) {
  insertHtmlBeforeEnd(el.parentNode, ' <span class="smallLink">[b]</span>');
}

function openQuickBuff(evt) {
  if (evt.target.className !== 'smallLink') { return; }
  openQuickBuffById(getPlayerId(evt.target.previousElementSibling.href));
}

export default function buffLinks() {
  const members = querySelectorAll(`#pCC a[href^="${playerIdUrl}"]`);
  batch([3, members, 0, insertBuffLink]);
  onclick(getPcc(), openQuickBuff);
}
