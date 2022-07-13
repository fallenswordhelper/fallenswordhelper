import calf from '../../../support/calf';
import setValue from '../../../system/setValue';

export default function togglePref(pref) {
  calf[pref] = !calf[pref];
  setValue(pref, calf[pref]);
}
