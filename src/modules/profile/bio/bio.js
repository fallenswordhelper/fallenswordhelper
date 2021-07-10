import bioEvtHdl from './bioEvtHdl';
import getElementById from '../../common/getElementById';
import onclick from '../../common/onclick';
import renderBio from './render';
import setInnerHtml from '../../dom/setInnerHtml';

function doRender(bioCell) {
  const bioContents = renderBio(bioCell.innerHTML);
  if (bioContents) {
    setInnerHtml(bioContents, bioCell);
  }
}

export default function profileRenderBio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  doRender(bioCell);
  onclick(bioCell, bioEvtHdl);
}
