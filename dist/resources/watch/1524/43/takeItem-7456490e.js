import { q as extend } from './calfSystem-476ab75d.js';
import { g as guild } from './guild-223136b1.js';
import { d as dialog } from './dialog-de7a7b58.js';
import { i as indexAjaxJson } from './indexAjaxJson-2772144f.js';

function guildInventory(data) {
  return guild(extend({ subcmd: 'inventory' }, data));
}

function takeItem(invId) {
  return indexAjaxJson({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'takeitem',
    guildstore_id: invId,
    ajax: 1,
  }).then(dialog);
}

export { guildInventory as g, takeItem as t };
//# sourceMappingURL=takeItem-7456490e.js.map
