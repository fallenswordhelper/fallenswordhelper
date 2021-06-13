import { q as extend } from './calfSystem-86663d02.js';
import { g as guild } from './guild-9779c2c4.js';
import { d as dialog } from './dialog-16fed349.js';
import { i as indexAjaxJson } from './indexAjaxJson-7a15a235.js';

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
//# sourceMappingURL=takeItem-ca45cd8a.js.map
