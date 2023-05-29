import sendEvent from '../analytics/sendEvent';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import onclick from '../common/onclick';
import querySelectorArray from '../common/querySelectorArray';
import { pcc } from '../support/layout';
import backgroundCreate from './backgroundCreate';

function injectButton(el) {
  insertHtmlAfterEnd(el, '<span class="quickCreate">'
    + '[<span class="sendLink">Quick Create</span>]</span>');
}

const isOurTarget = (target) => target.tagName === 'SPAN' && target.className === 'quickCreate';

function doQuickCreate(target) {
  const temp = target.previousElementSibling.previousElementSibling;
  if (temp && temp.value !== 'none') {
    backgroundCreate(target, temp);
    sendEvent('composing', 'QuickCreate');
  }
}

function hdlQuickCreate(evt) {
  const target = evt.target.parentNode;
  if (isOurTarget(target)) doQuickCreate(target);
}

export default function quickCreate() {
  querySelectorArray('input[id^=create-]:not(#create-multi)', pcc())
    .forEach(injectButton);
  onclick(pcc(), hdlQuickCreate);
}
