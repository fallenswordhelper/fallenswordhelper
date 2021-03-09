import { q as extend } from './calfSystem-d1de1997.js';
import { i as indexAjaxJson } from './indexAjaxJson-b07a637a.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-52f81513.js.map
