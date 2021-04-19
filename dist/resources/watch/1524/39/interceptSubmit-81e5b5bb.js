import { f as formToUrl } from './formToUrl-14c2f9ee.js';
import { k as on, p as pCC } from './calfSystem-d5c49dc8.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-81e5b5bb.js.map
