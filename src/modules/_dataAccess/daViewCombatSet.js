import $dataAccess from './_dataAccess';
import appViewCombatSet from '../app/profile/viewcombatset';
import viewCombatSets from './fallbacks/viewCombatSets';

export default function daViewCombatSet() {
  return $dataAccess(appViewCombatSet, viewCombatSets);
}
