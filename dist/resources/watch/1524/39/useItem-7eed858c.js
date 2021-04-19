import { d as dialog } from './dialog-181309bb.js';
import { i as indexAjaxJson } from './indexAjaxJson-bce38bad.js';
import { d as daUseItem } from './daUseItem-748a4fe1.js';
import { e as errorDialog } from './errorDialog-e19553de.js';

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
//# sourceMappingURL=useItem-7eed858c.js.map
