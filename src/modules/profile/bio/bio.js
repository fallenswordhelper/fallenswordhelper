import getElementById from '../../common/getElementById';
import onclick from '../../common/onclick';
import setInnerHtml from '../../dom/setInnerHtml';
import bioEvtHdl from './bioEvtHdl';
import render from './render';

function doRender(bioCell) {
  const bioContents = render(bioCell.innerHTML);
  if (bioContents) {
    setInnerHtml(bioContents, bioCell);
  }
}

export default function bio() {
  const bioCell = getElementById('profile-bio');
  if (!bioCell) { return; }
  doRender(bioCell);
  onclick(bioCell, bioEvtHdl);
}
