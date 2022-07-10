import destroyComponent from '../app/profile/destroycomponent';
import $dataAccess from './$dataAccess';
import dropComponent from './fallbacks/dropComponent';

export default function daDestroyComponent(componentIdAry) {
  return $dataAccess(destroyComponent, dropComponent, componentIdAry);
}
