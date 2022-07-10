import trim from '../../../common/trim';
import calf from '../../../support/calf';

export default function isOnList(creatureName) {
  return calf.doNotKillList.includes(trim(creatureName));
}
