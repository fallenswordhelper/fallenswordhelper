import loadComponents from '../app/profile/loadcomponents';
import $dataAccess from './$dataAccess';
import components from './fallbacks/components';

export default function daComponents() {
  return $dataAccess(loadComponents, components);
}
