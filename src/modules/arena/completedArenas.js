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

const getTarget = (inputValue) => querySelector(`#pCC input[value="${inputValue}"]`);
const newButton = (newValue) => createInput({ type: 'button', value: newValue });

function injectStartButton() {
  const prevButton = getTarget('<');
  if (!prevButton) return;
  const startButton = newButton('<<');
  insertElementBefore(startButton, prevButton);
  insertHtmlAfterEnd(startButton, '&nbsp;');
  onclick(startButton, gotoFirstPage);
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function gotoLastPage() {
  sendEvent('arena completed', 'gotoLastPage');
  gotoPage(lastPage());
}

function injectFinishButton() {
  const nextButton = getTarget('>');
  if (!nextButton) return;
  const finishButton = newButton('>>');
  insertElementAfter(finishButton, nextButton);
  insertHtmlBeforeBegin(finishButton, '&nbsp;');
  onclick(finishButton, gotoLastPage);
}

export default function completedArenas() {
  injectStartButton();
  injectFinishButton();
  interceptSubmit();
}
