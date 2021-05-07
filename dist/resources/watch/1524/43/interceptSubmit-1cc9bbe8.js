import { f as formToUrl } from './formToUrl-3223a0cf.js';
import { k as on, p as pCC } from './calfSystem-476ab75d.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-1cc9bbe8.js.map
