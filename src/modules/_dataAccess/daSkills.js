import $dataAccess from './$dataAccess';
import fallback from './fallbacks/skill';
import skill from '../app/settings/skill';

export default function daSkills(level, blocked) {
  return $dataAccess(skill, fallback, level, blocked);
}
