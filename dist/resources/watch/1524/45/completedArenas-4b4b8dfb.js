import { N as navigateTo, aA as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-02fd040d.js';
import { c as createInput } from './createInput-3da13004.js';
import { i as insertElementAfter } from './insertElementAfter-498ca395.js';
import { i as insertElementBefore } from './insertElementBefore-c442a2a7.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-6372af07.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-258c3a60.js';
import { i as interceptSubmit } from './interceptSubmit-091d1f17.js';
import './formToUrl-37eb4bb6.js';

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
//# sourceMappingURL=completedArenas-4b4b8dfb.js.map
