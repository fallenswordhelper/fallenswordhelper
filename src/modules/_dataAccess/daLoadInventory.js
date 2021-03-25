import $dataAccess from './_dataAccess';
import fetchinv from './fallbacks/fetchinv';
import loadInventory from '../app/profile/loadInventory';

export default function daLoadInventory() {
  return $dataAccess(loadInventory, fetchinv);
}
