import { getTheInv } from '../buildInv';
import playerName from './playerName';

function whereRenderGuildFilter(row) {
  if (row.player_id === -1) { return 'Guild Store'; }
  return playerName(row.player_id);
}

export default function whereRenderFilter(data, type, row) {
  if (row.player_id) {
    return whereRenderGuildFilter(row);
  }
  if (row.equipped) { return 'Worn'; }
  return getTheInv().folders[row.folder_id];
}
