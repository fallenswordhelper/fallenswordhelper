import { f as formToUrl } from './formToUrl-68851fbc.js';
import { k as on, p as pCC } from './calfSystem-23094c64.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-556c7605.js.map
