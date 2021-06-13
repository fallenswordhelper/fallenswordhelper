import { d as dialog } from './dialog-16fed349.js';
import { i as indexAjaxJson } from './indexAjaxJson-7a15a235.js';
import { d as daUseItem } from './daUseItem-8390f166.js';
import { e as errorDialog } from './errorDialog-2e0e2853.js';

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
//# sourceMappingURL=useItem-dd1d2a7a.js.map
