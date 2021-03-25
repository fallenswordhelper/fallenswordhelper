import { O as navigateTo, ap as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-6840a38e.js';
import { c as createInput } from './createInput-98d143f9.js';
import { i as insertElementAfter } from './insertElementAfter-be9367f8.js';
import { i as insertElementBefore } from './insertElementBefore-656c48d5.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-c42a1aa1.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-20d2a2e1.js';
import { i as interceptSubmit } from './interceptSubmit-7a9128a3.js';
import './formToUrl-a4a392eb.js';

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
//# sourceMappingURL=completedArenas-5c7b6a71.js.map
