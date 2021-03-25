import $dataAccess from './_dataAccess';
import dostoreitems from '../app/guild/inventory/dostoreitems';
import storeitems from './fallbacks/storeitems';

export default function daStoreItems(invIdAry) {
  return $dataAccess(dostoreitems, storeitems, invIdAry);
}
