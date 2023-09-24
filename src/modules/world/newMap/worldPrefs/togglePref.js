import sendEvent from '../../../analytics/sendEvent';
import calf from '../../../support/calf';
import setValue from '../../../system/setValue';

export default function togglePref(pref) {
  sendEvent('NewMap', 'togglePref');
  calf[pref] = !calf[pref];
  setValue(pref, calf[pref]);
}
