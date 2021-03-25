import { q as extend } from './calfSystem-6840a38e.js';
import { g as guild } from './guild-4cc45ab1.js';
import { d as dialog } from './dialog-8dd3ba22.js';
import { i as indexAjaxJson } from './indexAjaxJson-dfd6ce16.js';

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
//# sourceMappingURL=takeItem-2574941a.js.map
