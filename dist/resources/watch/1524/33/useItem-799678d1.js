import { d as dialog } from './dialog-fd1181f5.js';
import { i as indexAjaxJson } from './indexAjaxJson-ae1ced20.js';
import { d as daUseItem } from './daUseItem-61e17e3a.js';
import { e as errorDialog } from './errorDialog-998604da.js';

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
//# sourceMappingURL=useItem-799678d1.js.map
