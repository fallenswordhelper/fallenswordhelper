import { q as extend } from './calfSystem-23094c64.js';
import { g as guild } from './guild-0c0811d5.js';
import { d as dialog } from './dialog-e5c57349.js';
import { i as indexAjaxJson } from './indexAjaxJson-d91f385b.js';

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
//# sourceMappingURL=takeItem-26b5a194.js.map
