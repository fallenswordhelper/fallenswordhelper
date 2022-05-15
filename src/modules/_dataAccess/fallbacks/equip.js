import indexAjaxJson from '../../ajax/indexAjaxJson';

// Incomplete
export default async function equip(item) {
  const json = await indexAjaxJson({
    cmd: 'profile',
    subcmd: 'equipitem',
    inventory_id: item,
    ajax: 1,
  });
  return { s: json.r === 0 };
}
