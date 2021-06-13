import { b as bioEvtHdl, r as renderBio } from './render-e579a9f1.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-86663d02.js';
import './roundToString-34b7c935.js';
import './numberIsNaN-c0e87dea.js';
import './playerName-774091a1.js';

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
//# sourceMappingURL=bio-40a53e7b.js.map
