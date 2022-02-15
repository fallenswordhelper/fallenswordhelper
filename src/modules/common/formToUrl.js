import { indexPhp } from '../support/constants';
import navigateTo from './navigateTo';

export default function formToUrl(e) {
  const form = new FormData(e.target);
  if (e.submitter?.name) {
    form.append(e.submitter.name, e.submitter.value);
  }
  navigateTo(`${indexPhp}?${(new URLSearchParams(form)).toString()}`);
}
