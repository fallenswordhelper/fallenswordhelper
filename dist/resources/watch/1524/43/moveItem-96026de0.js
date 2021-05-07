import { d as dialog } from './dialog-de7a7b58.js';
import { i as indexAjaxJson } from './indexAjaxJson-2772144f.js';

function moveItem(invIdList, folderId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    inv_list: JSON.stringify(invIdList),
    folder_id: folderId,
    ajax: 1,
  }).then(dialog);
}

export { moveItem as m };
//# sourceMappingURL=moveItem-96026de0.js.map
