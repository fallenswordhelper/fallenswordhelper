import { b as bioEvtHdl, r as renderBio } from './render-c26a24d2.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-c08399e5.js';
import './roundToString-a9a284a9.js';
import './numberIsNaN-891c59d9.js';
import './playerName-34451b45.js';
import './toLowerCase-fa335220.js';

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
//# sourceMappingURL=bio-19ed0e0a.js.map
