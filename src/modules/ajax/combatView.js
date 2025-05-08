import indexAjaxData from './indexAjaxData';

export default function combatView(id) {
  return indexAjaxData({
    cmd: 'combat',
    subcmd: 'view',
    combat_id: id,
  });
}
