import $dataAccess from './_dataAccess';
import components from './fallbacks/components';
import loadComponents from '../app/profile/loadcomponents';

export default function daComponents() {
  return $dataAccess(loadComponents, components);
}
