import { d as dialog } from './dialog-e5c57349.js';
import { i as indexAjaxJson } from './indexAjaxJson-d91f385b.js';

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
//# sourceMappingURL=moveItem-7c56a0d3.js.map
