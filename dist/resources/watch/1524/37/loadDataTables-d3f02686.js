import { a as all } from './all-d206e4b9.js';
import { al as loadCss } from './calfSystem-6840a38e.js';

function loadScript() {
  return new Promise((resolve) => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.onload = () => { resolve(); };
    scriptTag.src = 'https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js';
    scriptTag.crossOrigin = 'anonymous';
    document.body.appendChild(scriptTag);
  });
}

function loadDataTables() {
  return all([loadScript(), loadCss('https://localhost:9966/dist/resources/watch/1524/dataTables.css')]);
}

export { loadDataTables as l };
//# sourceMappingURL=loadDataTables-d3f02686.js.map
