import { indexPhp } from '../support/constants';
import navigateTo from './navigateTo';

export default function formToUrl(form) {
  navigateTo(`${indexPhp}?${(new URLSearchParams(new FormData(form))).toString()}`);
}
