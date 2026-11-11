import view from '../app/composing/view';
import $dataAccess from './$dataAccess';
import composingView from './fallbacks/composingView';

export default function daComposing() {
  return $dataAccess(view, composingView);
}
