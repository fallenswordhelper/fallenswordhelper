import { c as calf } from './calfSystem-6840a38e.js';
import { g as guildStore } from './guildStore-42fc3208.js';
import { c as cmdExport } from './cmdExport-31c126b7.js';

function inventory() {
  return cmdExport({ subcmd: 'inventory' });
}

function getInventory() {
  if (calf.subcmd === 'guildinvmgr') {
    return guildStore();
  }
  return inventory();
}

export { getInventory as g };
//# sourceMappingURL=getInventory-832d18e6.js.map
