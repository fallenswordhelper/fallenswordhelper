import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
import daGuildReport from '../../_dataAccess/daGuildReport';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import basicItem from '../../_dataAccess/export/basicItem';
import enumFolders from '../../_dataAccess/export/enumFolders';
import flattenItems from '../../_dataAccess/export/flattenItems';
import getInventory from '../../ajax/getInventory';
import all from '../../common/all';
import currentGuildId from '../../common/currentGuildId';
import isArray from '../../common/isArray';
import partial from '../../common/partial';
import playerId from '../../common/playerId';
import calf from '../../support/calf';

let backpack = {};
let composed = [];
let guildStore = [];
let guildReport = [];
let inventoryFailure = false;
let theInv = {};

export const getTheInv = () => theInv;

function cacheTheInv(data) {
  theInv = data;
}

async function doInventory() {
  try {
    const data = await getInventory();
    if (data) cacheTheInv(data);
  } catch (error) {
    if (error.jqXhr.status === 500) inventoryFailure = true;
  }
}

const composedPot = (el) => el.t === 15;

async function doComposedFromBp() {
  const data = await daLoadInventory();
  if (!isArray(data?.r?.inventories)) return;
  backpack = data.r;
  composed = data.r.inventories.flatMap((el) => el.items).filter(composedPot);
}

async function getComposedFromGs(fn) {
  const data = await fn();
  if (!isArray(data?.r)) return;
  composed = composed.concat(data.r.filter(composedPot));
  return data.r;
}

async function doGs() {
  const data = await getComposedFromGs(daGuildFetchInv);
  if (data) guildStore = data;
}

async function doReport() {
  const data = await getComposedFromGs(daGuildReport);
  if (data) guildReport = data;
}

function thisPot(invId, pot) { return pot.a === invId; }

function addComposedName(item) {
  if (item.type === 15) {
    const cp = composed.find(partial(thisPot, item.inv_id));
    // eslint-disable-next-line no-param-reassign
    if (cp) { item.item_name = cp.n; }
  }
}

function gotSomeStuff() {
  if (isArray(theInv?.items)) theInv.items.forEach(addComposedName);
}

function fakeInv() {
  theInv = {
    ...(calf.subcmd === 'guildinvmgr' && {
      current_player_id: playerId(),
      guild_id: currentGuildId(),
    }),
    items: [],
    ...(calf.subcmd === 'invmanagernew' && { player_id: playerId() }),
  };
}

const equipmentMap = (o) => ({ ...o, equipped: true, folder_id: -2 });
const gsMap = (o) => ({ ...o, player: { id: -1 } });

function fixGuild() {
  theInv.items = guildReport
    .concat(guildStore.map(gsMap))
    .map(basicItem);
}

function fixInv() {
  theInv.folders = enumFolders(backpack);
  theInv.items = backpack.equipment.map(equipmentMap)
    .concat(flattenItems(backpack))
    .map(basicItem);
}

function fixInventory() {
  fakeInv();
  if (guildReport.length || guildStore.length) fixGuild();
  if (isArray(backpack.inventories)) fixInv();
}

function goFix() {
  const test = 0;
  if (!test && !inventoryFailure) gotSomeStuff();
  else fixInventory();
}

export async function buildInv() {
  const prm = [doInventory()];
  if (calf.subcmd === 'invmanagernew') prm.push(doComposedFromBp());
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  await all(prm);
  goFix();
}
