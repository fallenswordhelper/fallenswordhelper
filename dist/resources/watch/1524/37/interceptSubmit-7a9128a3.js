import { f as formToUrl } from './formToUrl-a4a392eb.js';
import { k as on, p as pCC } from './calfSystem-6840a38e.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-7a9128a3.js.map
