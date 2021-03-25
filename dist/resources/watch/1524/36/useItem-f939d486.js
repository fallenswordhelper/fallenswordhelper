import { d as dialog } from './dialog-92c3ed6b.js';
import { i as indexAjaxJson } from './indexAjaxJson-bc8da7ab.js';
import { d as daUseItem } from './daUseItem-df77a6d0.js';
import { e as errorDialog } from './errorDialog-db13a69a.js';

function equipItem(backpackInvId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'equipitem',
    inventory_id: backpackInvId,
    ajax: 1,
  }).then(dialog);
}

const ajaxReturnCode = (json) => ({
  ...json,
  r: json.s ? 0 : 1,
});

function useItem(backpackInvId) {
  return daUseItem(backpackInvId).then(errorDialog).then(ajaxReturnCode);
}

export { ajaxReturnCode as a, equipItem as e, useItem as u };
//# sourceMappingURL=useItem-f939d486.js.map
