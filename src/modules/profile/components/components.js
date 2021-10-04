import './components.css';
import Components from './Components.svelte';
import delType from './delType';
import deleteAllVisible from './deleteAllVisible';
import enableQuickDel from './enableQuickDel';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import partial from '../../common/partial';

function getInvTable() {
  const prc = getElementById('profileRightColumn');
  const invTables = getElementsByClassName('inventory-table', prc);
  if (invTables.length === 2) { return invTables[1]; }
}

export default function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) { return; }
  const app = new Components({ target: thisInvTable.parentNode });
  app.$on('enableQuickDel', partial(enableQuickDel, thisInvTable));
  app.$on('delType', partial(delType, thisInvTable));
  app.$on('deleteAllVisible', partial(deleteAllVisible, thisInvTable));
}
