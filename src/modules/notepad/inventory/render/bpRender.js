import { getTheInv } from '../buildInv';

function bpDisplayType(type, row) {
  if (type !== 'display') { return 'BP'; }
  if (row.player_id === -1) {
    return `<span class="fshLink takeItem" invid="${row.inv_id
    }" action="take">BP</span>`;
  }
  return `<span class="fshLink recallItem" invid="${row.inv_id
  }" playerid="${row.player_id
  }" mode="0" action="recall">BP</span>`;
}

export default function bpRender(_where, type, row) {
  if (row.folder_id || row.player_id
    === getTheInv().current_player_id) { return; }
  return bpDisplayType(type, row);
}
