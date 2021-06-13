import { c as calf } from './calfSystem-86663d02.js';
import { g as guildStore } from './guildStore-d1906879.js';
import { c as cmdExport } from './cmdExport-9ec958fe.js';

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
//# sourceMappingURL=getInventory-d237665d.js.map
