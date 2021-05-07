import { b as bioEvtHdl, r as renderBio } from './render-ab97ef16.js';
import { z as getElementById, o as onclick, B as setInnerHtml } from './calfSystem-476ab75d.js';
import './roundToString-3f9085b8.js';
import './numberIsNaN-885a5556.js';
import './playerName-f6639bfd.js';
import './toLowerCase-999f3196.js';

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
//# sourceMappingURL=bio-0c2ce9b0.js.map
