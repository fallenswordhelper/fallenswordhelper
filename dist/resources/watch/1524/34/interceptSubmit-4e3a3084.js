import { f as formToUrl } from './formToUrl-02aea8be.js';
import { k as on, p as pCC } from './calfSystem-d1de1997.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-4e3a3084.js.map
