import loadComponents from '../app/profile/loadcomponents';
import $dataAccess from './$dataAccess';
import profileComponents from './fallbacks/profileComponents';

export default function daComponents() {
  return $dataAccess(loadComponents, profileComponents);
}
