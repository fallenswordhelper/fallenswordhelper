import { defTr } from '../support/constants';
import closest from './closest';

export default function closestTr(el) {
  return closest(defTr, el);
}
