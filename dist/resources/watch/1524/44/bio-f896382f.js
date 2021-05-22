import { b as bioEvtHdl, r as renderBio } from './render-a0ec147f.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-23094c64.js';
import './roundToString-8b06d154.js';
import './numberIsNaN-11f99b26.js';
import './playerName-d957b0e4.js';
import './toLowerCase-c964d32b.js';

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
//# sourceMappingURL=bio-f896382f.js.map
