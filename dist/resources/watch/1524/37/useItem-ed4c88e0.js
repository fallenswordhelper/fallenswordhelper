import { d as dialog } from './dialog-8dd3ba22.js';
import { i as indexAjaxJson } from './indexAjaxJson-dfd6ce16.js';
import { d as daUseItem } from './daUseItem-1528034a.js';
import { e as errorDialog } from './errorDialog-dd9ceb95.js';

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
//# sourceMappingURL=useItem-ed4c88e0.js.map
