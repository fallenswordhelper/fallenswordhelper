import loadInventory from '../app/profile/loadInventory';
import $dataAccess from './$dataAccess';
import fetchinv from './fallbacks/fetchinv';

export default function daLoadInventory() {
  return $dataAccess(loadInventory, fetchinv);
}
