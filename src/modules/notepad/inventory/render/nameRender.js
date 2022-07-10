import { ahSearchUrl, rarity } from '../../../support/constants';
import { getTheInv } from '../buildInv';
import canRecall from './canRecall';

function getT(row) {
  if (row.player_id === -1) { return 4; }
  if (canRecall(row)) { return 7; }
  return 1;
}

function player(invPlayer, rowPlayer, guild) {
  if (invPlayer) { return invPlayer; }
  if (rowPlayer !== -1) { return rowPlayer; }
  return guild;
}

function isPartOfSet(row) {
  return row.stats && row.stats.set_name !== '';
}

function nameRenderDisplay(data, row) {
  const t = getT(row); // skipcq: JS-C1002
  const p = player(getTheInv().player_id, row.player_id, getTheInv().guild_id); // skipcq: JS-C1002

  let bold = data;
  if (row.equipped) { bold = `<b>${data}</b>`; }

  let setName = '';
  if (isPartOfSet(row)) {
    setName = ` (<span class="fshLink setName" set="${row.stats.set_name
    }">set</span>)`;
  }

  return `<a href="${ahSearchUrl}${data
  }" class="fshInvItem tip-dynamic ${
    rarity[row.rarity].clas}" `
    + `data-tipped="fetchitem.php?item_id=${row.item_id
    }&inv_id=${row.inv_id}&t=${t}&p=${p}">${
      bold}</a>${setName}`;
}

export default function nameRender(data, type, row) {
  if (type !== 'display') { return data; }
  return nameRenderDisplay(data, row);
}
