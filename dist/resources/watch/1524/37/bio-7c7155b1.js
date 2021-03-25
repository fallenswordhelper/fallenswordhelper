import { b as bioEvtHdl, r as renderBio } from './render-c6175c03.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-6840a38e.js';
import './roundToString-17a19d90.js';
import './numberIsNaN-a6723163.js';
import './playerName-2d72a4c8.js';
import './toLowerCase-9d38da0b.js';

function doRender(bioCell) {
  const bioContents = renderBio(bioCell.innerHTML);
  if (bioContents) {
    setInnerHtml(bioContents, bioCell);
  }
}

function profileRenderBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  doRender(bioCell);
  onclick(bioCell, bioEvtHdl);
}

export default profileRenderBio;
//# sourceMappingURL=bio-7c7155b1.js.map
