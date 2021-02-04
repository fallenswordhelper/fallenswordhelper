import { n as cElement, y as getElementById, h as hasClass, W as setValue } from './calfSystem-cc2b30b5.js';

function createBr() {
  return cElement('br');
}

function toggleVisibilty(evt) {
  const anItemId = evt.target.dataset.linkto;
  const anItem = getElementById(anItemId);
  const currentVisibility = hasClass('fshHide', anItem);
  anItem.classList.toggle('fshHide');
  if (currentVisibility) {
    setValue(anItemId, '');
  } else {
    setValue(anItemId, 'ON');
  }
}

export { createBr as c, toggleVisibilty as t };
//# sourceMappingURL=toggleVisibilty-91b21d49.js.map
