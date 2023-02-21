import dialog from './dialog';
import indexAjaxJson from './indexAjaxJson';

export default async function dropItem(invIdList) {
  const data = await indexAjaxJson({
    cmd: 'profile',
    subcmd: 'dodropitems',
    removeIndex: invIdList,
    ajax: 1,
  });
  return dialog(data);
}
