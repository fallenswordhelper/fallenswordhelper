import { d as dialog } from './dialog-e5c57349.js';
import { i as indexAjaxJson } from './indexAjaxJson-d91f385b.js';
import { d as daUseItem } from './daUseItem-9eb612e5.js';
import { e as errorDialog } from './errorDialog-48630d52.js';

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
//# sourceMappingURL=useItem-c8ec8951.js.map
