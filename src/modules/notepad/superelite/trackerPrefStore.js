import { writable } from 'svelte/store';
import daSuperElite from '../../_dataAccess/daSuperElite';
import delay from '../../common/delay';
import partial from '../../common/partial';
import { realtimeSecs } from '../../support/now';
import { get as idbget, set as idbset } from '../../system/idb';
import mergeSeData from './mergeSeData';
import seLogStore from './seLogStore';

let bgRunning = false;
let fshSeLog = {};
let trackerPref = false;

const getDelay = (data) => Math.max(
  0,
  600 - (realtimeSecs() - (data?.lastUpdate ?? 0)),
);

async function updateSeLog() {
  const data = await daSuperElite();
  fshSeLog = mergeSeData(fshSeLog, data);
  idbset('fsh_seLog', fshSeLog);
  seLogStore.set(fshSeLog);
}

async function backgroundPoll() {
  bgRunning = true;
  fshSeLog = await idbget('fsh_seLog');
  seLogStore.set(fshSeLog);
  while (trackerPref) {
    bgRunning = true;
    /* eslint-disable-next-line no-await-in-loop */
    await delay(getDelay(fshSeLog) * 1000);
    /* eslint-disable-next-line no-await-in-loop */
    if (trackerPref) await updateSeLog();
    bgRunning = false;
  }
}

function setTrackerPref(set, value) {
  trackerPref = value;
  set(trackerPref);
  if (trackerPref && !bgRunning) backgroundPoll();
}

function createTrackerPrefStore() {
  const { subscribe, set } = writable(0);

  return {
    subscribe,
    set: partial(setTrackerPref, set),
  };
}

const trackerPrefStore = createTrackerPrefStore();

export default trackerPrefStore;
