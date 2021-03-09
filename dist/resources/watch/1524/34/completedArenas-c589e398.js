import { N as navigateTo, am as arenaUrl, B as getText, D as querySelector, o as onclick, s as partial } from './calfSystem-d1de1997.js';
import { c as createInput } from './createInput-6dd456d3.js';
import { i as insertElementAfter } from './insertElementAfter-39c55d5b.js';
import { i as insertElementBefore } from './insertElementBefore-9e5d02cd.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-5f5dac02.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-2158ce82.js';
import { i as interceptSubmit } from './interceptSubmit-4e3a3084.js';
import './formToUrl-02aea8be.js';

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
//# sourceMappingURL=completedArenas-c589e398.js.map
