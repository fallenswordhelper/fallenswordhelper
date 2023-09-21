import all from './all';
import loadCss from './loadCss';
import loadScript from './loadScript';

const dt = 'https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js';

export default function loadDataTables() {
  return all([loadScript(dt), loadCss(defineDataTablesPath)]);
}
