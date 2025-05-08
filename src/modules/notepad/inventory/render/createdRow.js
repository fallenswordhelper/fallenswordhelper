function selfRowColor(data) {
  if (data.equipped) { return 'fshGreen'; }
  return 'fshNavy';
}

function guildRowColor(data) {
  if (data.player_id === -1) { return 'fshNavy'; }
  return 'fshMaroon';
}

function getRowColor(data) {
  if (data.folder_id) { return selfRowColor(data); }
  return guildRowColor(data);
}

export default function createdRow(row, data) {
  const colour = getRowColor(data);
  row.classList.add(colour);
  if (data.equipped) row.classList.add('fshBold');
}
