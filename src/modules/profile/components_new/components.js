import './components.css';
import Components from './Components.svelte';
import delType from './delType';
import deleteAllVisible from './deleteAllVisible';
import enableQuickDel from './enableQuickDel';
import getInvTable from '../components/getInvTable';
import partial from '../../common/partial';

export default function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) { return; }
  const app = new Components({ target: thisInvTable.parentNode });
  app.$on('enableQuickDel', partial(enableQuickDel, thisInvTable));
  app.$on('delType', delType);
  app.$on('deleteAllVisible', deleteAllVisible);
}
