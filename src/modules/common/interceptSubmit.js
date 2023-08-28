import { pcc } from '../support/layout';
import formToUrl from './formToUrl';
import on from './on';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e);
}

export default function interceptSubmit(target) {
  on(target || pcc(), 'submit', handleSubmit);
}
