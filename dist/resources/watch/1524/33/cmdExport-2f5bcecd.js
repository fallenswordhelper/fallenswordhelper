import { q as extend } from './calfSystem-cc2b30b5.js';
import { i as indexAjaxJson } from './indexAjaxJson-ae1ced20.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-2f5bcecd.js.map
