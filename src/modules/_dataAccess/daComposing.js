import view from '../app/composing/view';
import $dataAccess from './$dataAccess';
import composing from './fallbacks/composing';

export default function daComposing() {
  return $dataAccess(view, composing);
}
