import { d as dialog } from './dialog-181309bb.js';
import { i as indexAjaxJson } from './indexAjaxJson-bce38bad.js';

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
//# sourceMappingURL=moveItem-33bd95f7.js.map
