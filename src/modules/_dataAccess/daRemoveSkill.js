import removeskill from '../app/profile/removeskill';
import $dataAccess from './$dataAccess';
import debuff from './fallbacks/debuff';

export default function daRemoveSkill(buffId) {
  return $dataAccess(removeskill, debuff, buffId);
}
