import { q as extend } from './calfSystem-c08399e5.js';
import { i as indexAjaxJson } from './indexAjaxJson-bc8da7ab.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-d301ee98.js.map
