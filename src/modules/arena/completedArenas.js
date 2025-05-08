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

function injectStartButton(startButton, prevButton) {
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

function injectFinishButton(finishButton, nextButton) {
  insertElementAfter(finishButton, nextButton);
  insertHtmlBeforeBegin(finishButton, '&nbsp;');
  onclick(finishButton, gotoLastPage);
}

function genericButton(inputValue, newValue, callback) {
  const targetButton = getTarget(inputValue);
  if (!targetButton) return;
  const extraButton = newButton(newValue);
  callback(extraButton, targetButton);
}

export default function completedArenas() {
  genericButton('<', '<<', injectStartButton);
  genericButton('>', '>>', injectFinishButton);
  interceptSubmit();
}
