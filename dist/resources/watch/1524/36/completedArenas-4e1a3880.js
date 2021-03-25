import { O as navigateTo, ap as arenaUrl, C as getText, E as querySelector, o as onclick, s as partial } from './calfSystem-c08399e5.js';
import { c as createInput } from './createInput-4fd7522d.js';
import { i as insertElementAfter } from './insertElementAfter-c838586a.js';
import { i as insertElementBefore } from './insertElementBefore-42a90ba9.js';
import { i as insertHtmlAfterEnd } from './insertHtmlAfterEnd-5f5e185f.js';
import { i as insertHtmlBeforeBegin } from './insertHtmlBeforeBegin-70a8404e.js';
import { i as interceptSubmit } from './interceptSubmit-c60dab5a.js';
import './formToUrl-4cfd88e5.js';

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
//# sourceMappingURL=completedArenas-4e1a3880.js.map
