import { n as cElement, z as getElementById, h as hasClass, X as setValue } from './calfSystem-6840a38e.js';

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
//# sourceMappingURL=toggleVisibilty-e5980fe3.js.map
