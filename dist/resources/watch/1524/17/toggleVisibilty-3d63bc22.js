import { x as getElementById, T as setValue } from './calfSystem-f6498976.js';

function toggleVisibilty(evt) {
  const anItemId = evt.target.dataset.linkto;
  const anItem = getElementById(anItemId);
  const currentVisibility = anItem.classList.contains('fshHide');
  anItem.classList.toggle('fshHide');
  if (currentVisibility) {
    setValue(anItemId, '');
  } else {
    setValue(anItemId, 'ON');
  }
}

export { toggleVisibilty as t };
//# sourceMappingURL=toggleVisibilty-3d63bc22.js.map
