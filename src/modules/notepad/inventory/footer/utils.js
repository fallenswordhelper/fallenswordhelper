import fetchitem from '../../../app/fetchitem';
import arrayFrom from '../../../common/arrayFrom';
import chunk from '../../../common/chunk';
import playerId from '../../../common/playerId';
import calf from '../../../support/calf';
import { get, set } from '../../../system/idb';

const decorateItems = (ary, items) => items.map((o, i) => ({ ...o, inv_id: ary[i].inv_id }));
const isInBackpack = ({ folder_id: fid }) => (fid ?? -2) !== -2;
const isEquipped = ({ folder_id: fid }) => fid === -2;
const playerHas = ({ player_id: id }) => (id ?? -1) !== -1;
const itemPlayer = ({ player_id: pid }) => pid;
const inStore = ({ player_id: id }) => id === -1;
const byChunk = ([ary, pFn, tConst]) => chunk(20, ary).map((aChunk) => [aChunk, pFn, tConst]);
const thisItem = (rowdata) => ({ inv_id: invId }) => invId === rowdata.inv_id;
const getAttr = (lookup, i) => lookup.attributes.find(({ id }) => id === i)?.value ?? 0;
const updStats = (lookup, stats) => ({
  ...stats,
  armor: getAttr(lookup, 2),
  attack: getAttr(lookup, 0),
  damage: getAttr(lookup, 4),
  defense: getAttr(lookup, 1),
  hp: getAttr(lookup, 3),
  set_name: lookup.set_name ?? '',
});

export const equipable = (_idx, { type }) => type < 9;
export const justItems = (o) => (o?.s ? o.r.items : []);

export const getChunks = (dataAry) => [
  [dataAry.filter(isInBackpack), playerId, 0],
  [dataAry.filter(isEquipped), playerId, 1],
  [dataAry.filter(playerHas), itemPlayer, 7],
  [dataAry.filter(inStore), playerId, 4],
].flatMap(byChunk);

export function updateAttr(items) {
  return function upd() {
    const rowdata = this.data();
    const lookup = items.find(thisItem(rowdata));
    if (!lookup?.attributes) return;
    rowdata.stats = updStats(lookup, rowdata.stats);
    this.invalidate();
  };
}

const getCache = async () => await get(`fsh_${calf.subcmd}_cache`) ?? [];
const setCache = (data) => set(`fsh_${calf.subcmd}_cache`, data);

const other = (newItemsAry) => (cacheItem) => newItemsAry
  .every((newItem) => newItem.inv_id !== cacheItem.inv_id);

async function tryCache(items) {
  const cache = await getCache();
  const untouched = cache.filter(other(items));
  await setCache(untouched.concat(items));
}

export async function itemDetails(ary, pFn, tConst) {
  const json = await fetchitem({
    item_id: ary.map(({ item_id: itemId }) => itemId),
    inv_id: ary.map(({ inv_id: invId }) => invId),
    p: ary.map(pFn),
    t: ary.map(() => tConst),
  });
  if (json?.s) {
    json.r.items = decorateItems(ary, json.r.items);
    await tryCache(json.r.items);
  }
  return json;
}

const keep = (rowdata) => (cacheItem) => rowdata
  .some((rowItem) => cacheItem.inv_id === rowItem.inv_id);
const getClean = (rows, cache) => cache.filter(keep(arrayFrom(rows.data())));

async function getCleanCache(rows) {
  const cache = await getCache();
  const cleanCache = getClean(rows, cache);
  await setCache(cleanCache);
  return cleanCache;
}

async function updateRows(api) {
  const rows = api.rows(equipable);
  const cleanCache = await getCleanCache(rows);
  // eslint-disable-next-line array-callback-return
  rows.every(updateAttr(cleanCache)); // skipcq: JS-D008
}

export async function init(fshInv) {
  const api = new DataTable(fshInv);
  await updateRows(api);
  api.draw();
}
