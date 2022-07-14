import runDefault from '../../../common/runDefault';
import calf from '../../../support/calf';

export default function callBounties() {
  if (calf.enableWantedList
      || calf.enableActiveBountyList) {
    runDefault(import('../../activeWantedBounties/activeWantedBounties'));
  }
}
