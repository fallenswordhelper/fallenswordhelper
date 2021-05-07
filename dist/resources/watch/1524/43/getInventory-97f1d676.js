import { c as calf } from './calfSystem-476ab75d.js';
import { g as guildStore } from './guildStore-ffacd1c7.js';
import { c as cmdExport } from './cmdExport-5254d9ed.js';

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
//# sourceMappingURL=getInventory-97f1d676.js.map
