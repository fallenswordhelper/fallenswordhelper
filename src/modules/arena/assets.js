export const tableOpts = {
  columnDefs: [
    { orderable: false, targets: [9] },
  ],
  dom: 't',
  info: false,
  order: [[3, 'asc'], [0, 'asc']],
  paging: false,
  stateSave: true,
  stateDuration: 0,
};
export const arenaFilter = '<table width="100%"><tbody><tr><td>'
  + '<span class="fshBlue"><input id="fshHideMoves" type="checkbox">'
  + '&nbsp;Hide Matches for Completed Moves</span></td><td align="right">'
  + '<span class="fshBlue">Min lvl:&nbsp;<input id="fshMinLvl" class="fshNumberInput" type="number" min="0">'
  + '&nbsp;Max lvl:&nbsp;<input id="fshMaxLvl" class="fshNumberInput" type="number" min="0">&nbsp;&nbsp;'
  + '<input id="fshReset" class="custombutton" type="button" '
  + 'value="Reset"></span></td></tr></tbody></table>';
export const fshArenaKey = 'fsh_arena';
export const moveRe = /\/arena\/(?<move>\d+)\.png/;
