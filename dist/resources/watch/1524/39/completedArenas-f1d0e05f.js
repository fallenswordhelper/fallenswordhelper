import { O as navigateTo, ax as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-d5c49dc8.js';
import { c as createInput } from './createInput-329265d6.js';
import { i as insertElementAfter } from './insertElementAfter-b6eb70e1.js';
import { i as insertElementBefore } from './insertElementBefore-68b894c4.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-6fcd4187.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-28218743.js';
import { i as interceptSubmit } from './interceptSubmit-81e5b5bb.js';
import './formToUrl-14c2f9ee.js';

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
//# sourceMappingURL=completedArenas-f1d0e05f.js.map
