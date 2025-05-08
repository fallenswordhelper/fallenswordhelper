import calf from '../support/calf';
import getValue from '../system/getValue';

export default function getCalfPrefs(pref) { calf[pref] = getValue(pref); }
