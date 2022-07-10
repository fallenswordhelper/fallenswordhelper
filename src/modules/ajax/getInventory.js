import guildStore from '../_dataAccess/export/guildStore';
import inventory from '../_dataAccess/export/inventory';
import calf from '../support/calf';

export default function getInventory() {
  if (calf.subcmd === 'guildinvmgr') {
    return guildStore();
  }
  return inventory();
}
