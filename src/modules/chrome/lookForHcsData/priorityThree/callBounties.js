import calf from '../../../support/calf';
import runDefault from '../../../common/runDefault';

export default function callBounties() {
  if (calf.enableWantedList
      || calf.enableActiveBountyList) {
    runDefault(import('../../activeWantedBounties/activeWantedBounties'));
  }
}
