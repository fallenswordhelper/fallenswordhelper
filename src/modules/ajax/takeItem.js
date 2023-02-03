import dialog from './dialog';
import indexAjaxJson from './indexAjaxJson';

export default async function takeItem(invId) {
  const response = await indexAjaxJson({
    cmd: 'guild',
    subcmd: 'inventory',
    subcmd2: 'takeitem',
    guildstore_id: invId,
    ajax: 1,
  });
  dialog(response);
  return response;
}
