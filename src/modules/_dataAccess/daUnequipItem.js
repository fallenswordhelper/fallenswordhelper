import unequipitem from '../app/profile/unequipitem';
import $dataAccess from './$dataAccess';
import unequip from './fallbacks/unequip';

export default function daUnequipItem(item) {
  return $dataAccess(unequipitem, unequip, item);
}
