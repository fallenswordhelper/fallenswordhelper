import { c as calf } from './calfSystem-d1de1997.js';
import { g as guildStore } from './guildStore-d0e54e36.js';
import { c as cmdExport } from './cmdExport-52f81513.js';

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
//# sourceMappingURL=getInventory-721a132f.js.map
