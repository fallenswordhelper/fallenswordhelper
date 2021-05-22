import { q as extend } from './calfSystem-23094c64.js';
import { i as indexAjaxJson } from './indexAjaxJson-d91f385b.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-c04c0b2d.js.map
