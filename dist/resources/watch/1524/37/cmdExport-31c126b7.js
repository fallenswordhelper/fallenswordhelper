import { q as extend } from './calfSystem-6840a38e.js';
import { i as indexAjaxJson } from './indexAjaxJson-dfd6ce16.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-31c126b7.js.map
