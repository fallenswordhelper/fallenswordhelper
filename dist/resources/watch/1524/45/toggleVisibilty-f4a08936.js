import { n as cElement, z as getElementById, h as hasClass, X as setValue } from './calfSystem-02fd040d.js';

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
//# sourceMappingURL=toggleVisibilty-f4a08936.js.map
