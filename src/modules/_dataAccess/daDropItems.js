import $dataAccess from './$dataAccess';
import appDrop from '../app/profile/dodropitems';
import fallbackDrop from './fallbacks/dodropitem';

export default function daDropItems(itemsAry) {
  return $dataAccess(appDrop, fallbackDrop, itemsAry);
}
