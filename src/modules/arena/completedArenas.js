import sendEvent from '../analytics/sendEvent';
import createInput from '../common/cElement/createInput';
import getText from '../common/getText';
import insertElementAfter from '../common/insertElementAfter';
import insertElementBefore from '../common/insertElementBefore';
import insertHtmlAfterEnd from '../common/insertHtmlAfterEnd';
import insertHtmlBeforeBegin from '../common/insertHtmlBeforeBegin';
import interceptSubmit from '../common/interceptSubmit';
import navigateTo from '../common/navigateTo';
import onclick from '../common/onclick';
import querySelector from '../common/querySelector';
import { arenaUrl } from '../support/constants';

function gotoPage(pageId) {
  navigateTo(`${arenaUrl}completed&page=${pageId}`);
}

function gotoFirstPage() {
  sendEvent('arena completed', 'gotoFirstPage');
  gotoPage(1);
}

function injectStartButton() {
  const prevButton = querySelector('#pCC input[value="<"]');
  if (prevButton) {
    const startButton = createInput({ type: 'button', value: '<<' });
    insertElementBefore(startButton, prevButton);
    insertHtmlAfterEnd(startButton, '&nbsp;');
    onclick(startButton, gotoFirstPage);
  }
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function gotoLastPage() {
  sendEvent('arena completed', 'gotoLastPage');
  gotoPage(lastPage());
}

function injectFinishButton() {
  const nextButton = querySelector('#pCC input[value=">"]');
  if (nextButton) {
    const finishButton = createInput({ type: 'button', value: '>>' });
    insertElementAfter(finishButton, nextButton);
    insertHtmlBeforeBegin(finishButton, '&nbsp;');
    onclick(finishButton, gotoLastPage);
  }
}

export default function completedArenas() {
  injectStartButton();
  injectFinishButton();
  interceptSubmit();
}
