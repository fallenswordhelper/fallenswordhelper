import { b as bioEvtHdl, r as renderBio } from './render-16365142.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-d5c49dc8.js';
import './roundToString-f45536fa.js';
import './numberIsNaN-d0e4b349.js';
import './playerName-73fd680e.js';
import './toLowerCase-179aa35f.js';

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
//# sourceMappingURL=bio-87b49cd5.js.map
