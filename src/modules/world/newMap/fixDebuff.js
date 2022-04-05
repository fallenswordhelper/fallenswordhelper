import getElementById from '../../common/getElementById';
import hideQTip from '../../common/hideQTip';
import onclick from '../../common/onclick';

function fixDebuffQTip(e) {
  hideQTip(e.target);
}

export default function fixDebuff() {
  onclick(getElementById('buffList'), fixDebuffQTip);
}
