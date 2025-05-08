import usecombatset from '../app/profile/usecombatset';
import $dataAccess from './$dataAccess';
import useCombatSet from './fallbacks/useCombatSet';

export default function daUseCombatSet(combatSetId) {
  return $dataAccess(usecombatset, useCombatSet, combatSetId);
}
