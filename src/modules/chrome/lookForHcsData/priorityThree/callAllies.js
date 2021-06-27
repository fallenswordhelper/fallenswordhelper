import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callAllies() {
  if (calf.enableOnlineAlliesWidgets) {
    runDefault(import('../../widgets/addOnlineAlliesWidgets'));
  }
}
