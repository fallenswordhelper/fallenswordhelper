import { q as extend } from './calfSystem-02fd040d.js';
import { g as guild } from './guild-7df4620b.js';
import { d as dialog } from './dialog-25c9de65.js';
import { i as indexAjaxJson } from './indexAjaxJson-3c4dab4a.js';

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
//# sourceMappingURL=takeItem-5d1f92ae.js.map
