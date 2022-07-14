import isUndefined from '../common/isUndefined';
import isAuto from './isAuto';

export default function noGa() {
  return isAuto() || isUndefined(window.ga);
}
