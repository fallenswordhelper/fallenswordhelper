import canRecall from './canRecall';
import fallback from '../../../system/fallback';
import { getTheInv } from '../buildInv';

function gsRecall(row) {
  return `<span class="fshLink recallItem" invid="${
    row.inv_id}" playerid="${
    fallback(row.player_id, getTheInv().player_id)
  }" mode="1" action="recall">GS</span>`;
}

function gsStore(row) {
  return `<span class="fshLink storeItem" invid="${
    row.inv_id}">GS</span>`;
}

function gsDisplayType(type, row, fn) {
  if (type === 'display') {
    return fn(row);
  }
  return 'GS';
}

function canStore(row) {
  return row.folder_id && !row.bound; // && !row.equipped;
}

export default function gsRender(_data, type, row) {
  if (canRecall(row)) { return gsDisplayType(type, row, gsRecall); }
  if (canStore(row)) { return gsDisplayType(type, row, gsStore); }
}
