import { b as bioEvtHdl, r as renderBio } from './render-c3e9e0e7.js';
import { y as getElementById, o as onclick, A as setInnerHtml } from './calfSystem-cc2b30b5.js';
import './roundToString-63b5b3af.js';
import './numberIsNaN-c188f177.js';
import './playerName-bc6aeb96.js';
import './toLowerCase-abb30c3b.js';

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
//# sourceMappingURL=bio-a0912efe.js.map
