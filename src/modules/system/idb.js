import { openDB } from 'idb';
import stdout from '../support/stdout';

let dbPrm = Promise.resolve();
let initDb = false;

function getDb() {
  if (!initDb) {
    dbPrm = openDB('keyval-store', 1, {
      upgrade(db) {
        db.createObjectStore('keyval');
      },
    });
    initDb = true;
  }
  return dbPrm;
}

export async function get(key) {
  try {
    return (await getDb()).get('keyval', key);
  } catch (e) {
    stdout(e);
  }
}

export async function set(key, val) {
  try {
    return (await getDb()).put('keyval', val, key);
  } catch (e) {
    stdout(e);
  }
}

export async function del(key) {
  try {
    return (await getDb()).delete('keyval', key);
  } catch (e) {
    stdout(e);
  }
}
