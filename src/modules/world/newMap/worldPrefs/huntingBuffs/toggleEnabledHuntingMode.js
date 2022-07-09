import calf from '../../../../support/calf';
import { defFetchPlayerBuffs } from '../../../../support/constants';
import { setCurrentBuffList } from './setCurrentBuffList';
import setValue from '../../../../system/setValue';

export default function toggleEnabledHuntingMode(e) {
  if (e.target.name !== 'enabledHuntingMode') { return; }
  calf.enabledHuntingMode = e.target.value;
  setValue('enabledHuntingMode', calf.enabledHuntingMode);
  setCurrentBuffList();
  GameData.fetch(defFetchPlayerBuffs);
}
