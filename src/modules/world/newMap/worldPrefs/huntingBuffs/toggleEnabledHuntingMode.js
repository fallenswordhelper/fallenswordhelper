import sendEvent from '../../../../analytics/sendEvent';
import calf from '../../../../support/calf';
import { defFetchPlayerBuffs } from '../../../../support/constants';
import setValue from '../../../../system/setValue';
import { setCurrentBuffList } from './setCurrentBuffList';

export default function toggleEnabledHuntingMode(e) {
  if (e.target.name !== 'enabledHuntingMode') {
    return;
  }
  sendEvent('NewMap', 'toggleEnabledHuntingMode');
  calf.enabledHuntingMode = e.target.value;
  setValue('enabledHuntingMode', calf.enabledHuntingMode);
  setCurrentBuffList();
  GameData.fetch(defFetchPlayerBuffs);
}
