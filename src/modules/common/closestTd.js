import { defTd } from '../support/constants';
import closest from './closest';

export default function closestTd(el) {
  return closest(defTd, el);
}
