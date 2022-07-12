import entries from '../../../common/entries';
import partial from '../../../common/partial';
import { playerIdUrl } from '../../../support/constants';
import isSelected from '../../../system/isSelected';
import { getTheInv } from '../buildInv';
import playerName from './playerName';

function whereRenderGuildDisplay(row) {
  if (row.player_id === -1) { return 'Guild Store'; }
  return `<a class="fshMaroon" href="${playerIdUrl
  }${row.player_id}">${playerName(row.player_id)}</a>`;
}

function numeric(a, b) { return a[0] - b[0]; }

function makeOption(folderId, pair) {
  return `<option value="${pair[0]}"${
    isSelected(Number(pair[0]), folderId)}>${
    pair[1]}</option>`;
}

function makeFolderOptions(folderId, folders) {
  return entries(folders).sort(numeric)
    .map(partial(makeOption, folderId)).join('');
}

export default function whereRenderDisplay(_data, _type, row) {
  if (row.player_id) {
    return whereRenderGuildDisplay(row);
  }
  if (row.equipped) { return 'Worn'; }
  return `<select class="fshMoveItem" data-inv="${row.inv_id}">${
    makeFolderOptions(row.folder_id, getTheInv().folders)}</select>`;
}
