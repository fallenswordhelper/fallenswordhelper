import appDrop from '../app/profile/dodropitems';
import $dataAccess from './$dataAccess';
import fallbackDrop from './fallbacks/dodropitem';

export default function daDropItems(itemsAry) {
  return $dataAccess(appDrop, fallbackDrop, itemsAry);
}
