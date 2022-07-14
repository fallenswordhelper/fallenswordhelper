import { defTable } from '../support/constants';
import closest from './closest';

export default function closestTable(el) {
  return closest(defTable, el);
}
