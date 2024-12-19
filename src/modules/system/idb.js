import { get as idbGet, set as idbSet } from 'idb-keyval';
import stdout from '../support/stdout';

export async function get(key, store) {
  try {
    return await idbGet(key, store);
  } catch (e) {
    stdout(e);
  }
}

export async function set(key, value, store) {
  try {
    return await idbSet(key, value, store);
  } catch (e) {
    stdout(e);
  }
}
