import { d as dialog } from './dialog-25c9de65.js';
import { i as indexAjaxJson } from './indexAjaxJson-3c4dab4a.js';

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
//# sourceMappingURL=moveItem-4df2673a.js.map
