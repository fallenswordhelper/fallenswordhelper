import { f as formToUrl } from './formToUrl-37eb4bb6.js';
import { k as on, p as pCC } from './calfSystem-02fd040d.js';

function handleSubmit(e) {
  e.preventDefault();
  formToUrl(e.target);
}

function interceptSubmit(target) {
  on(target || pCC, 'submit', handleSubmit);
}

export { interceptSubmit as i };
//# sourceMappingURL=interceptSubmit-091d1f17.js.map
