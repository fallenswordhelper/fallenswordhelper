import './composing.css';
import sendEvent from '../analytics/sendEvent';
import getElementById from '../common/getElementById';
import getElementsByClassName from '../common/getElementsByClassName';
import insertElementBefore from '../common/insertElementBefore';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import jQueryPresent from '../common/jQueryPresent';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import { pcc } from '../support/layout';
import getValue from '../system/getValue';
import backgroundCreate from './backgroundCreate';
import fastCompose from './fastCompose';
import parseComposing from './parseComposing';

function moveButtons() {
  if (getValue('moveComposingButtons')) {
    const buttonDiv = getElementById('composing-error-dialog')
      .previousElementSibling;
    buttonDiv.setAttribute('style', 'text-align: right; padding: 0 38px 0 0');
    const top = getElementsByClassName('composing-level', pcc())[0]
      .parentNode;
    insertElementBefore(buttonDiv, top);
  }
}

function injectButton(el) {
  insertHtmlAfterEnd(el, '<span class="quickCreate">'
    + '[<span class="sendLink">Quick Create</span>]</span>');
}

function isOurTarget(target) {
  return target.tagName === 'SPAN' && target.className === 'quickCreate';
}

function doQuickCreate(target) {
  const temp = target.previousElementSibling.previousElementSibling;
  if (temp && temp.value !== 'none') {
    backgroundCreate(target, temp);
    sendEvent('composing', 'QuickCreate');
  }
}

function quickCreate(evt) {
  const target = evt.target.parentNode;
  if (isOurTarget(target)) {
    doQuickCreate(target);
  }
}

function hasJQuery() {
  parseComposing();
  querySelectorArray('input[id^=create-]:not(#create-multi)', pcc())
    .forEach(injectButton);
  onclick(pcc(), quickCreate);
  moveButtons();
  fastCompose();
}

export default function composing() {
  if (jQueryPresent() && pcc()) { hasJQuery(); }
}
