import calf from '../../support/calf';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import hideElement from '../../common/hideElement';
import hideNodeList from './hideNodeList';

export default function doHideBuffSelected(parent, type) {
  if (calf.hideBuffSelected) {
    hideNodeList(getElementsByClassName(`${type}-buff-check-on`, parent));
    hideElement(getElementById(`${type}-quick-buff`));
  }
}
