import { c as calf } from './calfSystem-cc2b30b5.js';
import { g as guildStore } from './guildStore-f2839cad.js';
import { c as cmdExport } from './cmdExport-2f5bcecd.js';

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
//# sourceMappingURL=getInventory-81c6c8ab.js.map
