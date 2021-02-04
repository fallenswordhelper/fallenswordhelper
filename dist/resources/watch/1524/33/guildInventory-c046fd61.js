import { q as extend } from './calfSystem-cc2b30b5.js';
import { g as guild } from './guild-b4b44a5f.js';

function guildInventory(data) {
  return guild(extend({ subcmd: 'inventory' }, data));
}

export { guildInventory as g };
//# sourceMappingURL=guildInventory-c046fd61.js.map
