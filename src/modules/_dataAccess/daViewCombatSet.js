import appViewCombatSet from '../app/profile/viewcombatset';
import $dataAccess from './$dataAccess';
import viewCombatSets from './fallbacks/viewCombatSets';

export default function daViewCombatSet() {
  return $dataAccess(appViewCombatSet, viewCombatSets);
}
