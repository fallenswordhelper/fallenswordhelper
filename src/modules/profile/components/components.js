import './components.css';
import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';
import partial from '../../common/partial';
import Components from './Components.svelte';
import dispatchDelete from './dispatchDelete';
import dispatchDelType from './dispatchDelType';
import dispatchQuickDel from './dispatchQuickDel';
import { mount } from 'svelte';

function getInvTable() {
  const prc = getElementById('profileRightColumn');
  const invTables = getElementsByClassName('inventory-table', prc);
  if (invTables.length === 2) return invTables[1];
}

export default function components() {
  const thisInvTable = getInvTable();
  if (!thisInvTable) return;
  mount(Components, {
    props: {
      dispatchDelete: partial(dispatchDelete, thisInvTable),
      dispatchDelType: partial(dispatchDelType, thisInvTable),
      dispatchQuickDel: partial(dispatchQuickDel, thisInvTable),
    },
    target: thisInvTable.parentNode,
  });
}
