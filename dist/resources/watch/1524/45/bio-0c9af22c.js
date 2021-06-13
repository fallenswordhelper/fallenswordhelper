import { b as bioEvtHdl, r as renderBio } from './render-2229ef0c.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-02fd040d.js';
import './roundToString-0b0f4906.js';
import './numberIsNaN-c7db67d0.js';
import './playerName-512f3e50.js';

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
//# sourceMappingURL=bio-0c9af22c.js.map
