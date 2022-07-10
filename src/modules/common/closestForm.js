import { defForm } from '../support/constants';
import closest from './closest';

export default function closestForm(el) {
  return closest(defForm, el);
}
