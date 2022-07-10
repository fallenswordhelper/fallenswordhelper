import { get as idbGet, set as idbSet } from 'idb-keyval';
import sendException from '../analytics/sendException';
import parseError from '../support/parseError';

const processError = (e) => {
  if (e && e.name !== 'NotFoundError') {
    sendException(parseError(e), false);
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
