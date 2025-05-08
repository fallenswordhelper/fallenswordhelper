import takeitem from '../app/guild/inventory/takeitem';
import $dataAccess from './$dataAccess';
import gsTake from './fallbacks/gsTake';

export default function daGsTake(invId) {
  return $dataAccess(takeitem, gsTake, invId);
}
