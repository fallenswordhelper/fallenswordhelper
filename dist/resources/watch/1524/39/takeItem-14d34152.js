import { q as extend } from './calfSystem-d5c49dc8.js';
import { g as guild } from './guild-dd9e157d.js';
import { d as dialog } from './dialog-181309bb.js';
import { i as indexAjaxJson } from './indexAjaxJson-bce38bad.js';

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
//# sourceMappingURL=takeItem-14d34152.js.map
