import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callAllies() {
  if (calf.enableOnlineAlliesWidgets) {
    runDefault(import('../../widgets/addOnlineAlliesWidgets'));
  }
}
