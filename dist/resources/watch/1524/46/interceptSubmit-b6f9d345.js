import { f as formToUrl } from './formToUrl-bdc5f748.js';
import { k as on, p as pCC } from './calfSystem-86663d02.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-b6f9d345.js.map
