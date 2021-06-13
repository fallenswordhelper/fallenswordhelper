import { d as dialog } from './dialog-16fed349.js';
import { i as indexAjaxJson } from './indexAjaxJson-7a15a235.js';

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
//# sourceMappingURL=moveItem-b05d0360.js.map
