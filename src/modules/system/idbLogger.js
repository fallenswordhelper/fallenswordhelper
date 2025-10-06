import { openDB } from 'idb';
import devStdOut from '../support/devStdOut';
import { del, get } from './idb';

let db; // skipcq: JS-0119
let initDb = false;
let combatLogNeedsKeyvalTransfer = false;

async function combatLogKeyvalTransfer(newDb) {
  const fshCombatLog = await get('fsh_combatLog');
  if (fshCombatLog) {
    const tx = newDb.transaction('combat-log', 'readwrite');
    for (const entry of fshCombatLog) tx.store.add(entry);
    await tx.done;
    await del('fsh_combatLog');
  }
}

function initCombatLogStore(newDb) {
  const combatLog = newDb.createObjectStore('combat-log', {
    autoIncrement: true,
  });
  combatLog.createIndex('time', 'time');
  combatLogNeedsKeyvalTransfer = true;
}

const dbOptions = {
  upgrade(newDb) {
    if (!newDb.objectStoreNames.contains('combat-log')) {
      initCombatLogStore(newDb);
    }
  },
};

async function makeFshDb() {
  db = await openDB('fsh-db1', 1, dbOptions);
  initDb = true;
  if (combatLogNeedsKeyvalTransfer) await combatLogKeyvalTransfer(db);
}

async function getDb() {
  if (!initDb) await makeFshDb();
  return db;
}

export async function combatLogAdd(value) {
  try {
    return (await getDb()).add('combat-log', value);
  } catch (e) {
    devStdOut(e);
  }
}

export async function combatLogGetAll() {
  try {
    return (await getDb()).getAllFromIndex('combat-log', 'time');
  } catch (e) {
    devStdOut(e);
  }
}

export async function combatLogClear() {
  try {
    return (await getDb()).clear('combat-log');
  } catch (e) {
    devStdOut(e);
  }
}
