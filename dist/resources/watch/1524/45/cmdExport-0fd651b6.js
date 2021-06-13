import { q as extend } from './calfSystem-02fd040d.js';
import { i as indexAjaxJson } from './indexAjaxJson-3c4dab4a.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-0fd651b6.js.map
