import $dataAccess from './$dataAccess';
import limits from '../app/profile/limits';
import profileLimits from './fallbacks/profileLimits';

export default function daProfileLimits() {
  return $dataAccess(limits, profileLimits);
}
