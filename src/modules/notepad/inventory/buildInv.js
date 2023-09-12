import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
import daGuildReport from '../../_dataAccess/daGuildReport';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import getInventory from '../../ajax/getInventory';
import all from '../../common/all';
import currentGuildId from '../../common/currentGuildId';
import fromEntries from '../../common/fromEntries';
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

function getComposedFromBp(data) {
  if (!isArray(data?.r?.inventories)) return;
  backpack = data.r;
  composed = data.r.inventories.flatMap((el) => el.items).filter(composedPot);
}

async function doComposedFromBp() {
  const data = await daLoadInventory();
  getComposedFromBp(data);
}

function getComposedFromGs(data) {
  if (!isArray(data?.r)) return;
  composed = composed.concat(data.r.filter(composedPot));
}

async function doGs() {
  const data = await daGuildFetchInv();
  if (isArray(data?.r)) guildStore = data.r;
  getComposedFromGs(data);
}

async function doReport() {
  const data = await daGuildReport();
  if (isArray(data?.r)) guildReport = data.r;
  getComposedFromGs(data);
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

const craftType = ['Perfect', 'Excellent', 'Very Good', 'Good', 'Average', 'Poor', 'Uncrafted'];
const equipmentMap = (o) => ({ ...o, equipped: true, folder_id: -2 });
const folderMap = ({ id, name }) => [id, name];
const gsMap = (o) => ({ ...o, player: { id: -1 } });
const inventoryMap = ({ id, items }) => items.map((o) => ({ ...o, folder_id: id }));

const basicItem = (o) => ({
  craft: o.cr ? craftType[o.cf] : '',
  durability: o.cd,
  equipped: o.equipped,
  ...(o.folder_id && { folder_id: o.folder_id }),
  forge: o.hf ?? 0,
  guild_tag: o.tg ?? -1,
  inv_id: o.a,
  item_id: o.b,
  item_name: o.n,
  max_durability: o.md,
  ...(o.player?.id && { player_id: o.player.id }),
  rarity: o.r,
  stats: { min_level: o.l, set_name: '' },
  type: o.t,
});

function fixInventory() {
  fakeInv();
  if (guildReport.length || guildStore.length) {
    theInv.items = guildReport
      .concat(guildStore.map(gsMap))
      .map(basicItem);
  }
  if (isArray(backpack.inventories)) {
    theInv.folders = fromEntries(backpack.inventories.map(folderMap));
    theInv.items = backpack.equipment.map(equipmentMap)
      .concat(backpack.inventories.flatMap(inventoryMap))
      .map(basicItem);
  }
}

export async function buildInv() {
  const prm = [doInventory()];
  if (calf.subcmd === 'invmanagernew') prm.push(doComposedFromBp());
  if (calf.subcmd === 'guildinvmgr') {
    prm.push(doGs());
    prm.push(doReport());
  }
  await all(prm);
  const test = 1;
  if (!test && !inventoryFailure) gotSomeStuff();
  else fixInventory();
}
