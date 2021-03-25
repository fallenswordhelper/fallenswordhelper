import { c as calf } from './calfSystem-c08399e5.js';
import { g as guildStore } from './guildStore-fce032a6.js';
import { c as cmdExport } from './cmdExport-d301ee98.js';

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
//# sourceMappingURL=getInventory-7b398dd5.js.map
