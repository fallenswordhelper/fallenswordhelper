import { f as formToUrl } from './formToUrl-4cfd88e5.js';
import { k as on, p as pCC } from './calfSystem-c08399e5.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-c60dab5a.js.map
