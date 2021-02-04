import { N as navigateTo, am as arenaUrl, B as getText, D as querySelector, o as onclick, s as partial } from './calfSystem-cc2b30b5.js';
import { c as createInput } from './createInput-fee5fccc.js';
import { i as insertElementAfter } from './insertElementAfter-b0af5eed.js';
import { i as insertElementBefore } from './insertElementBefore-0a7f2602.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-270a1d76.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-7d0b1284.js';
import { i as interceptSubmit } from './interceptSubmit-d78c86f8.js';
import './formToUrl-3b72b00b.js';

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
//# sourceMappingURL=completedArenas-b9f10591.js.map
