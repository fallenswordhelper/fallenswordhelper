import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
import daGuildReport from '../../_dataAccess/daGuildReport';
import daLoadInventory from '../../_dataAccess/daLoadInventory';
import enumFolders from '../../_dataAccess/export/enumFolders';
import flattenItems from '../../_dataAccess/export/flattenItems';
import guildStore from '../../_dataAccess/export/guildStore';
import inventory from '../../_dataAccess/export/inventory';
import all from '../../common/all';
import currentGuildId from '../../common/currentGuildId';
import delay from '../../common/delay';
import playerId from '../../common/playerId';
import calf from '../../support/calf';
import { pcc } from '../../support/layout';
import { injectError } from './injectError';

let theInv = {};

export const getTheInv = () => theInv;

async function doInventory(fn) {
  const dev = 0;
  if (defineUserIsDev && dev) {
    injectError(pcc(), { message: 'DEMO Failure' });
    await delay(250);
    return;
  }
  try {
    const data = await fn();
    return data;
  } catch (error) {
    if (error.jqXhr.status !== 500) throw error;
    injectError(pcc(), error);
  }
}

const decorateItems = (combined) => (o) => {
  const thisObj = combined.find((p) => p.a === o.inv_id);
  return { ...o, ...(thisObj?.n && { item_name: thisObj.n }) };
};

const equipmentMap = (o) => ({ ...o, equipped: true, folder_id: -2 });
const playerInv = (thisBackpack, invItems, combined) => ({
  folders: enumFolders(thisBackpack),
  items: invItems.map(decorateItems(combined)),
  player_id: playerId(),
});

async function doInvMgr() {
  const [pInv, pBackpack] = await all([
    doInventory(inventory),
    daLoadInventory(),
  ]);
  const invItems = pInv?.items ?? [];
  const thisBackpack = pBackpack?.r ?? {};
  const equipment = thisBackpack.equipment?.map(equipmentMap) ?? [];
  const combined = equipment.concat(flattenItems(thisBackpack));
  return playerInv(thisBackpack, invItems, combined);
}

const gsMap = (o) => ({ ...o, player: { id: -1 } });
const guildInv = (invItems, combined) => ({
  current_player_id: playerId(),
  items: invItems.map(decorateItems(combined)),
  guild_id: currentGuildId(),
});

async function doGuildInv() {
  const [ginv, gReport, gStore] = await all([
    doInventory(guildStore),
    daGuildReport(),
    daGuildFetchInv(),
  ]);
  const invItems = ginv?.items ?? [];
  const reportItems = gReport?.r ?? [];
  const storeItems = gStore?.r ?? [];
  const combined = reportItems.concat(storeItems.map(gsMap));
  return guildInv(invItems, combined);
}

export async function buildInv() {
  if (calf.subcmd === 'invmanagernew') {
    const data = await doInvMgr();
    theInv = data;
  } else if (calf.subcmd === 'guildinvmgr') {
    const data = await doGuildInv();
    theInv = data;
  }
}
