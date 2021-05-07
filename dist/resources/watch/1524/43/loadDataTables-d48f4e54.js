import { a as all } from './all-0d44a747.js';
import { au as loadScript, av as loadCss } from './calfSystem-476ab75d.js';

const dt = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';

function loadDataTables() {
  return all([loadScript(dt), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-d48f4e54.js.map
