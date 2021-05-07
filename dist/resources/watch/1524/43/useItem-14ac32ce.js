import { d as dialog } from './dialog-de7a7b58.js';
import { i as indexAjaxJson } from './indexAjaxJson-2772144f.js';
import { d as daUseItem } from './daUseItem-c910d95f.js';
import { e as errorDialog } from './errorDialog-0f2ff56e.js';

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
//# sourceMappingURL=useItem-14ac32ce.js.map
