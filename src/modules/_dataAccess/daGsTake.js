import $dataAccess from './_dataAccess';
import gsTake from './fallbacks/gsTake';
import takeitem from '../app/guild/inventory/takeitem';

export default function daGsTake(invId) {
  return $dataAccess(takeitem, gsTake, invId);
}
