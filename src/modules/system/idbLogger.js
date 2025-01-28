import { openDB } from 'idb';
import stdout from '../support/stdout';
import { del, get } from './idb';

let db;
let initDb = false;
let combatLogNeedsKeyvalTransfer = false;

async function combatLogKeyvalTransfer() {
  const fshCombatLog = await get('fsh_combatLog');
  if (fshCombatLog) {
    const tx = db.transaction('combat-log', 'readwrite');
    for (const entry of fshCombatLog) tx.store.add(entry);
    await tx.done;
    await del('fsh_combatLog');
  }
}

function initCombatLogStore(db) {
  const combatLog = db.createObjectStore('combat-log', {
    autoIncrement: true,
  });
  combatLog.createIndex('time', 'time');
  combatLogNeedsKeyvalTransfer = true;
}

async function getDb() {
  if (!initDb) {
    db = await openDB('fsh-db1', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('combat-log')) initCombatLogStore(db);
      },
    });
    initDb = true;

    if (combatLogNeedsKeyvalTransfer) await combatLogKeyvalTransfer();
  }
  return db;
}

export async function combatLogAdd(value) {
  try {
    return (await getDb()).add('combat-log', value);
  } catch (e) {
    stdout(e);
  }
}

export async function combatLogGetAll() {
  try {
    return (await getDb()).getAllFromIndex('combat-log', 'time');
  } catch (e) {
    stdout(e);
  }
}

export async function combatLogClear() {
  try {
    return (await getDb()).clear('combat-log');
  } catch (e) {
    stdout(e);
  }
}
