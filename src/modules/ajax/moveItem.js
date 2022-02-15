import dialog from './dialog';
import indexAjaxJson from './indexAjaxJson';
import jsonStringify from '../common/jsonStringify';

export default function moveItem(invIdList, folderId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    inv_list: jsonStringify(invIdList),
    folder_id: folderId,
    ajax: 1,
  }).then(dialog);
}
