import { c as calf } from './calfSystem-d5c49dc8.js';
import { g as guildStore } from './guildStore-2b65051c.js';
import { c as cmdExport } from './cmdExport-7bf7ec6d.js';

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
//# sourceMappingURL=getInventory-a5c93479.js.map
