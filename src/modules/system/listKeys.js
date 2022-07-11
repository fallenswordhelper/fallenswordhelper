import { GMSTORAGE_PATH } from '../support/constants';

export default function listKeys() {
  const list = [];
  for (let i = 0, il = window.localStorage.length; i < il; i++) {
    const key = window.localStorage.key(i);
    if (key.startsWith(GMSTORAGE_PATH)) list.push(key.replace(GMSTORAGE_PATH, ''));
  }
  return list;
}
