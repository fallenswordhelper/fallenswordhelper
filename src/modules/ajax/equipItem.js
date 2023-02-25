import dialog from './dialog';
import indexAjaxJson from './indexAjaxJson';

export default async function equipItem(backpackInvId) {
  const data = await indexAjaxJson({
    cmd: 'profile',
    subcmd: 'equipitem',
    inventory_id: backpackInvId,
    ajax: 1,
  });
  return dialog(data);
}
