import jsonStringify from '../common/jsonStringify';
import dialog from './dialog';
import indexAjaxJson from './indexAjaxJson';

export default async function moveItem(invIdList, folderId) {
  const response = await indexAjaxJson({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    inv_list: jsonStringify(invIdList),
    folder_id: folderId,
    ajax: 1,
  });
  return dialog(response);
}
