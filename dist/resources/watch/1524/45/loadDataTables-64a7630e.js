import { a as all } from './all-47be5400.js';
import { aw as loadScript, ax as loadCss } from './calfSystem-02fd040d.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-64a7630e.js.map
