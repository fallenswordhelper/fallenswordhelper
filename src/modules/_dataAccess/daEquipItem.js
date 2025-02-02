import indexAjaxJson from '../ajax/indexAjaxJson';
import equipitem from '../app/profile/equipitem';
import $dataAccess from './$dataAccess';

async function equip(item) {
  const json = await indexAjaxJson({
    cmd: 'profile',
    subcmd: 'equipitem',
    inventory_id: item,
    ajax: 1,
  });
  return { s: json.r === 0 };
}

export default function daEquipItem(item) {
  return $dataAccess(equipitem, equip, item);
}
