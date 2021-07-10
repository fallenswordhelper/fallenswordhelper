import getElementById from '../../common/getElementById';
import getElementsByClassName from '../../common/getElementsByClassName';

let invTableCache;

export default function getInvTable() {
  if (!invTableCache) {
    const invTables = getElementsByClassName('inventory-table',
      getElementById('profileRightColumn'));
    if (invTables.length === 2) { [, invTableCache] = invTables; }
  }
  return invTableCache;
}
