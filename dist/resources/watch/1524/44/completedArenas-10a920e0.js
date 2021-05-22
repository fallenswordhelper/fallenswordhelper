import { N as navigateTo, az as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-23094c64.js';
import { c as createInput } from './createInput-f3e0e916.js';
import { i as insertElementAfter } from './insertElementAfter-57565639.js';
import { i as insertElementBefore } from './insertElementBefore-7c440c87.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-1704b1c7.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-aee8c41b.js';
import { i as interceptSubmit } from './interceptSubmit-556c7605.js';
import './formToUrl-68851fbc.js';

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
//# sourceMappingURL=completedArenas-10a920e0.js.map
