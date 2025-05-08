import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callGuildInfo() {
  if (calf.enableGuildInfoWidgets) {
    runDefault(import('../../widgets/addGuildInfoWidgets'));
  }
}
