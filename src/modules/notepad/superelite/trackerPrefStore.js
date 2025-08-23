import { writable } from 'svelte/store';
import indexAjaxDoc from '../../ajax/indexAjaxDoc';
import delay from '../../common/delay';
import partial from '../../common/partial';
import querySelector from '../../common/querySelector';
import { realtimeSecs } from '../../support/now';
import { get as idbget, set as idbset } from '../../system/idb';
import mergeSeData from './mergeSeData';
import seLogStore from './seLogStore';
import dataRows from '../../common/dataRows';
import getTextTrim from '../../common/getTextTrim';
import playerIdFromAnchor from '../../common/playerIdFromAnchor';
import itemIdFromImg from '../../common/itemIdFromImg';
import dateUtc from '../../common/dateUtc';
import arrayFrom from '../../common/arrayFrom';

let bgRunning = false;
let fshSeLog = {};
let lastAttempt = 0;
let trackerPref = false;

const getDelay = (data) =>
  Math.max(
    0,
    600 - (realtimeSecs() - (data?.lastUpdate ?? 0)),
    600 - (realtimeSecs() - lastAttempt),
  );

function convertDate(textDate) {
  const dateAry = textDate.replace('<br>', ' ').split(/[: /]/);
  return dateUtc([dateAry[2], dateAry[1], dateAry[0], dateAry[3], dateAry[4]]);
}

function parseLocation(cell) {
  const textNodes = arrayFrom(cell.childNodes).filter(
    (n) => n.nodeType === Node.TEXT_NODE && getTextTrim(n) !== '',
  );
  if (textNodes.length === 0) return '';
  return textNodes.map((n) => getTextTrim(n)).join(' ');
}

const extractData = (row) => ({
  time: convertDate(row.cells[0].innerHTML) / 1000,
  creature: getTextTrim(row.cells[1]),
  playerId: playerIdFromAnchor(querySelector('a', row.cells[2])),
  playerName: getTextTrim(querySelector('a', row.cells[2])),
  location: parseLocation(row.cells[2]),
  drop: itemIdFromImg(querySelector('img', row.cells[3])) ?? 'no drop',
});

async function getSeData() {
  const killLog = await indexAjaxDoc({ cmd: 'superelite' });
  if (!killLog || !querySelector('img[src*="eliteslayerlog"]', killLog)) {
    return [];
  }
  const logTable = querySelector('#pCC table table', killLog);
  const rows = dataRows(logTable, 4, 0);
  return rows.map(extractData);
}

async function updateSeLog() {
  lastAttempt = realtimeSecs();
  const data = await getSeData();
  if (data?.length) {
    fshSeLog = mergeSeData(fshSeLog, data);
    idbset('fsh_seLog', { lastUpdate: lastAttempt, ...fshSeLog });
    seLogStore.set(fshSeLog);
  }
}

async function backgroundPoll() {
  bgRunning = true;
  fshSeLog = await idbget('fsh_seLog');
  seLogStore.set(fshSeLog);
  // skipcq: JS-0092
  while (trackerPref) {
    bgRunning = true;
    await delay(getDelay(fshSeLog) * 1000);
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
