import $dataAccess from './$dataAccess';
import unequip from './fallbacks/unequip';
import unequipitem from '../app/profile/unequipitem';

export default function daUnequipItem(item) {
  return $dataAccess(unequipitem, unequip, item);
}
