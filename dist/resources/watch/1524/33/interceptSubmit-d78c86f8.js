import { f as formToUrl } from './formToUrl-3b72b00b.js';
import { k as on, p as pCC } from './calfSystem-cc2b30b5.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-d78c86f8.js.map
