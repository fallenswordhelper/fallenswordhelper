import { d as dialog } from './dialog-92c3ed6b.js';
import { i as indexAjaxJson } from './indexAjaxJson-bc8da7ab.js';

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
//# sourceMappingURL=moveItem-b870bb42.js.map
