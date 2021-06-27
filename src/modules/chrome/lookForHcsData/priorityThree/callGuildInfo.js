import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callGuildInfo() {
  if (calf.enableGuildInfoWidgets) {
    runDefault(import('../../widgets/addGuildInfoWidgets'));
  }
}
