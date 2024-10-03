import './quickCollect.css';
import daComposingCollect from '../../_dataAccess/daComposingCollect';
import sendEvent from '../../analytics/sendEvent';
import getText from '../../common/getText';
import insertHtmlAfterBegin from '../../common/insertHtmlAfterBegin';
import onclick from '../../common/onclick';
import querySelectorArray from '../../common/querySelectorArray';
import setInnerHtml from '../../dom/setInnerHtml';
import { pcc } from '../../support/layout';

function injectButtons(btn) {
  const pid = btn.getAttribute('onclick').split('&')[2].split('=')[1];
  insertHtmlAfterBegin(
    btn.parentNode,
    `[ <span class="fsh-quick-collect"><button class="fshBl fsh-bli" type="button" value="${
      pid
    }">Quick Collect</button></span> ]&nbsp;`,
  );
}

const isOurTarget = (target) =>
  target.tagName === 'BUTTON' && getText(target) === 'Quick Collect';

function prepareCollect(ctx) {
  ctx.nextElementSibling.disabled = true;
  ctx.nextElementSibling.nextElementSibling.disabled = true;
  setInnerHtml('', ctx);
  ctx.classList.add('fshSpinner');
}

function injectResult(container, className, text) {
  setInnerHtml(text, container);
  container.classList.add(className);
}

function handleResult(container, ret) {
  container.classList.remove('fshSpinner');
  if (ret.s) injectResult(container, 'fshGreen', 'Collected');
  else injectResult(container, 'fshRed', 'Error');
}

async function doQuickCollect(target) {
  sendEvent('composing', 'quickCollect');
  const container = target.parentNode;
  const pid = target.value;
  prepareCollect(container);
  const result = await daComposingCollect(pid);
  handleResult(container, result);
}

function hdlQuickCollect(evt) {
  if (isOurTarget(evt.target)) doQuickCollect(evt.target);
}

export default function quickCollect() {
  const collectButtons = querySelectorArray(
    'input[value="Collect Potion"]',
    pcc(),
  );
  collectButtons.forEach(injectButtons);
  onclick(pcc(), hdlQuickCollect);
}
