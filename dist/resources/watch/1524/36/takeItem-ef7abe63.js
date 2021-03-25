import { q as extend } from './calfSystem-c08399e5.js';
import { g as guild } from './guild-5c91beb3.js';
import { d as dialog } from './dialog-92c3ed6b.js';
import { i as indexAjaxJson } from './indexAjaxJson-bc8da7ab.js';

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
//# sourceMappingURL=takeItem-ef7abe63.js.map
