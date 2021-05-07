import { O as navigateTo, ay as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-476ab75d.js';
import { c as createInput } from './createInput-a1c8d139.js';
import { i as insertElementAfter } from './insertElementAfter-679b5db3.js';
import { i as insertElementBefore } from './insertElementBefore-23d4e956.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-4fdce3d2.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-ba21c963.js';
import { i as interceptSubmit } from './interceptSubmit-1cc9bbe8.js';
import './formToUrl-3223a0cf.js';

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
//# sourceMappingURL=completedArenas-f446be98.js.map
