import { c as calf } from './calfSystem-02fd040d.js';
import { g as guildStore } from './guildStore-081eb10c.js';
import { c as cmdExport } from './cmdExport-0fd651b6.js';

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
//# sourceMappingURL=getInventory-a16a408a.js.map
