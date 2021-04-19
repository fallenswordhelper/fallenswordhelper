import { n as cElement, z as getElementById, h as hasClass, X as setValue } from './calfSystem-d5c49dc8.js';

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
//# sourceMappingURL=toggleVisibilty-69ce2173.js.map
