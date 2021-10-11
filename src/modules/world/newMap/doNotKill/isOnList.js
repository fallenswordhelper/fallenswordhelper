import calf from '../../../support/calf';
import trim from '../../../common/trim';

export default function isOnList(creatureName) {
  return calf.doNotKillList.includes(trim(creatureName));
}
