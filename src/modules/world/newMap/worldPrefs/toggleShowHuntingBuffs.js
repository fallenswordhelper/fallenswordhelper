import calf from '../../../support/calf';
import { defFetchPlayerBuffs } from '../../../support/constants';
import setValue from '../../../system/setValue';

export default function toggleShowHuntingBuffs() {
  calf.showHuntingBuffs = !calf.showHuntingBuffs;
  setValue('showHuntingBuffs', calf.showHuntingBuffs);
  GameData.fetch(defFetchPlayerBuffs);
}
