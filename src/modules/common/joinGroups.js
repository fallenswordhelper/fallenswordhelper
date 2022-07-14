import calf from '../support/calf';
import { joinUnderUrl, joinallUrl } from '../support/constants';
import navigateTo from './navigateTo';

export default function joinGroups() {
  if (!calf.enableMaxGroupSizeToJoin) {
    navigateTo(joinallUrl);
  } else {
    navigateTo(joinUnderUrl);
  }
}
