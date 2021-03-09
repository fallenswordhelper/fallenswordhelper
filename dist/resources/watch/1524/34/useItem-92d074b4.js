import { d as dialog } from './dialog-a123f46e.js';
import { i as indexAjaxJson } from './indexAjaxJson-b07a637a.js';
import { d as daUseItem } from './daUseItem-2a706301.js';
import { e as errorDialog } from './errorDialog-da819f92.js';

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
//# sourceMappingURL=useItem-92d074b4.js.map
