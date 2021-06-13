import { a as all } from './all-3768003b.js';
import { aw as loadScript, ax as loadCss } from './calfSystem-86663d02.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-b55cd180.js.map
