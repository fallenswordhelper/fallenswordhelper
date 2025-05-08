import collect from '../app/composing/collect';
import $dataAccess from './$dataAccess';
import composingCollect from './fallbacks/composingCollect';

export default function daComposingCollect(pid) {
  return $dataAccess(collect, composingCollect, pid);
}
