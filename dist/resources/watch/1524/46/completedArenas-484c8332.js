import { N as navigateTo, aA as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-86663d02.js';
import { c as createInput } from './createInput-dfd633b7.js';
import { i as insertElementAfter } from './insertElementAfter-71f91bb6.js';
import { i as insertElementBefore } from './insertElementBefore-c2bb9234.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-0e0c4a8c.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-49b00a11.js';
import { i as interceptSubmit } from './interceptSubmit-b6f9d345.js';
import './formToUrl-bdc5f748.js';

function gotoPage(pageId) {
  navigateTo(`${arenaUrl}completed&page=${pageId}`);
}

const lastPage = () => getText(querySelector('#pCC input[value="Go"]')
  .parentNode.previousElementSibling).replace(/\D/g, '');

function injectStartButton() {
  const prevButton = querySelector('#pCC input[value="<"]');
  if (prevButton) {
    const startButton = createInput({ type: 'button', value: '<<' });
    insertElementBefore(startButton, prevButton);
    insertHtmlAfterEnd(startButton, '&nbsp;');
    onclick(startButton, partial(gotoPage, 1));
  }
}

function gotoLastPage() { gotoPage(lastPage()); }

function injectFinishButton() {
  const nextButton = querySelector('#pCC input[value=">"]');
  if (nextButton) {
    const finishButton = createInput({ type: 'button', value: '>>' });
    insertElementAfter(finishButton, nextButton);
    insertHtmlBeforeBegin(finishButton, '&nbsp;');
    onclick(finishButton, gotoLastPage);
  }
}

function completedArenas() {
  injectStartButton();
  injectFinishButton();
  interceptSubmit();
}

export default completedArenas;
//# sourceMappingURL=completedArenas-484c8332.js.map
