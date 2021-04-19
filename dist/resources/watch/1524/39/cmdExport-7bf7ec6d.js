import { q as extend } from './calfSystem-d5c49dc8.js';
import { i as indexAjaxJson } from './indexAjaxJson-bce38bad.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-7bf7ec6d.js.map
