import playerName from './playerName';

function whereRenderUserFolder(row) {
  if (row.equipped) { return -2; }
  return row.folder_id;
}

export default function whereRender(_data, _type, row) {
  if (row.folder_id) {
    return whereRenderUserFolder(row);
  }
  if (row.player_id === -1) { return '~'; }
  return playerName(row.player_id);
}
