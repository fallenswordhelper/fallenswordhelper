import { q as extend } from './calfSystem-d1de1997.js';
import { g as guild } from './guild-cdbb2bef.js';

function guildInventory(data) {
  return guild(extend({ subcmd: 'inventory' }, data));
}

export { guildInventory as g };
//# sourceMappingURL=guildInventory-08f7c5dc.js.map
