import equipitem from '../app/profile/equipitem';
import $dataAccess from './$dataAccess';
import equip from './fallbacks/equip';

export default function daEquipItem(item) {
  return $dataAccess(equipitem, equip, item);
}
