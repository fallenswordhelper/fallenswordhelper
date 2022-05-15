import $dataAccess from './$dataAccess';
import equip from './fallbacks/equip';
import equipitem from '../app/profile/equipitem';

export default function daEquipItem(item) {
  return $dataAccess(equipitem, equip, item);
}
