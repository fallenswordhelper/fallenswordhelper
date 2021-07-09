import $dataAccess from './$dataAccess';
import composing from './fallbacks/composing';
import view from '../app/composing/view';

export default function daComposing() {
  return $dataAccess(view, composing);
}
