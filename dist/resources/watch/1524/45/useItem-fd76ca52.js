import { d as dialog } from './dialog-25c9de65.js';
import { i as indexAjaxJson } from './indexAjaxJson-3c4dab4a.js';
import { d as daUseItem } from './daUseItem-5fcee2f4.js';
import { e as errorDialog } from './errorDialog-0a862506.js';

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
//# sourceMappingURL=useItem-fd76ca52.js.map
