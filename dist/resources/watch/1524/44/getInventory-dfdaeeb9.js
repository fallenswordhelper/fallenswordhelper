import { c as calf } from './calfSystem-23094c64.js';
import { g as guildStore } from './guildStore-f52b8537.js';
import { c as cmdExport } from './cmdExport-c04c0b2d.js';

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
//# sourceMappingURL=getInventory-dfdaeeb9.js.map
