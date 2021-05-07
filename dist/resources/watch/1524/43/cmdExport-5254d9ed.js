import { q as extend } from './calfSystem-476ab75d.js';
import { i as indexAjaxJson } from './indexAjaxJson-2772144f.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-5254d9ed.js.map
