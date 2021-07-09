import $dataAccess from './$dataAccess';
import destroyComponent from '../app/profile/destroycomponent';
import dropComponent from './fallbacks/dropComponent';

export default function daDestroyComponent(componentIdAry) {
  return $dataAccess(destroyComponent, dropComponent, componentIdAry);
}
