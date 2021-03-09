import { b as bioEvtHdl, r as renderBio } from './render-d4df1560.js';
import { y as getElementById, o as onclick, A as setInnerHtml } from './calfSystem-d1de1997.js';
import './roundToString-c55ff653.js';
import './numberIsNaN-738f2a3f.js';
import './playerName-3a91fc0e.js';
import './toLowerCase-82b2a5d7.js';

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
//# sourceMappingURL=bio-d4285d40.js.map
