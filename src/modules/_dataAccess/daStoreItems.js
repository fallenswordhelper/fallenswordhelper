import dostoreitems from '../app/guild/inventory/dostoreitems';
import $dataAccess from './$dataAccess';
import storeitems from './fallbacks/storeitems';

export default function daStoreItems(invIdAry) {
  return $dataAccess(dostoreitems, storeitems, invIdAry);
}
