import { q as extend } from './calfSystem-86663d02.js';
import { i as indexAjaxJson } from './indexAjaxJson-7a15a235.js';

function cmdExport(data) {
  return indexAjaxJson(extend({ cmd: 'export' }, data));
}

export { cmdExport as c };
//# sourceMappingURL=cmdExport-9ec958fe.js.map
