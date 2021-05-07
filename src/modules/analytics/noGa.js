import isAuto from './isAuto';
import isUndefined from '../common/isUndefined';

export default function noGa() {
  return isAuto() || isUndefined(window.ga);
}
