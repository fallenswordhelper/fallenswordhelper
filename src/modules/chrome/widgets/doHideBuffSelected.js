import arrayFrom from '../../common/arrayFrom';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import calf from '../../support/calf';

function elementInvisible(el) {
  if (el?.classList) el.classList.add('fshInvisible');
}

function nodeListInvisible(nodeList) {
  arrayFrom(nodeList).forEach(elementInvisible);
}

export default function doHideBuffSelected(parent, type) {
  if (calf.hideBuffSelected) {
    nodeListInvisible(getElementsByClassName(`${type}-buff-check-on`, parent));
    elementInvisible(getElementById(`${type}-quick-buff`));
  }
}
