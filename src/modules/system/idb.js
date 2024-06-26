import Honeybadger from '@honeybadger-io/js';
import { get as idbGet, set as idbSet } from 'idb-keyval';

const processError = (e) => {
  if (e && e.name !== 'NotFoundError') {
    Honeybadger.notify(e);
  }
};

export async function get(key, store) {
  try {
    return await idbGet(key, store);
  } catch (e) {
    processError(e);
  }
}

export async function set(key, value, store) {
  try {
    return await idbSet(key, value, store);
  } catch (e) {
    processError(e);
  }
}
