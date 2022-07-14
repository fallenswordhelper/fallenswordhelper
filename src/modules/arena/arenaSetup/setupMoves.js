import indexAjaxData from '../../ajax/indexAjaxData';
import allthen from '../../common/allthen';
import getArrayByTagName from '../../common/getArrayByTagName';
import jQueryNotPresent from '../../common/jQueryNotPresent';
import navigateTo from '../../common/navigateTo';
import partial from '../../common/partial';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import { arenaUrl, defTable, oldActionSpinner } from '../../support/constants';
import { moveRe } from '../assets';
import moveOptions from './moveOptions';

const oldMoves = [];
let imgNodes = 0;
let selectRow = 0;

function doPickMove(moveId, slotId) {
  return indexAjaxData({
    cmd: 'arena',
    subcmd: 'dopickmove',
    move_id: moveId,
    slot_id: slotId,
  });
}

function value(el) { return el.value; }

function getAllMoves() {
  return getArrayByTagName('select', selectRow).map(value);
}

function resetMove(val, ind) {
  if (val === oldMoves[ind]) { return; }
  imgNodes.eq(ind).attr({
    src: oldActionSpinner,
    width: '25',
    height: '25',
  });
  return doPickMove('x', ind);
}

function newMove(val, ind) {
  if (val === 'x' || val === oldMoves[ind]) { return; }
  return doPickMove(val, ind);
}

function pageRefresh() {
  navigateTo(`${arenaUrl}setup`);
}

function changeMoves(newMoves) {
  const prm = newMoves.map(newMove);
  allthen(prm, pageRefresh);
}

function updateMoves() { // jQuery
  const newMoves = getAllMoves();
  const prm = newMoves.map(resetMove);
  allthen(prm, partial(changeMoves, newMoves));
}

function updateButton(table) { // jQuery
  const row = $('<tr><td colspan=32 align=center '
    + 'style="padding-top: 2px;padding-bottom: 2px;">'
    + '<input class="custombutton" value="Update" type="button">'
    + '</td></tr>');
  $('input', row).on('click', updateMoves);
  table.append(row);
}

const getMoveCode = (e) => regExpFirstCapture(moveRe, $(e).attr('src')) ?? 'x';

function makeDropDown(row, _i, e) { // jQuery
  const move = getMoveCode(e);
  oldMoves.push(move);
  const html = $(moveOptions);
  $(`option[value=${move}]`, html).prop('selected', true);
  row.append(html);
}

function pickerRow(table) { // jQuery
  const row = $('<tr/>');
  selectRow = row.get(0);
  row.append('<td/>');
  imgNodes.each(partial(makeDropDown, row));
  table.append(row);
}

function getTable() { // jQuery
  return imgNodes.eq(0).closest(defTable).parent().closest(defTable);
}

function selectMoves(evt) { // jQuery
  $(evt.target).off();
  imgNodes = $('#pCC a[href*="=pickmove&"] img');
  const table = getTable();
  pickerRow(table);
  $('img[src*="arena/bar_spacer."]', table).attr({ width: '15', height: '50' });
  updateButton(table);
}

export default function setupMoves() { // jQuery
  if (jQueryNotPresent()) { return; }
  const node = $('#pCC b:contains("Setup Combat Moves")');
  if (node.length !== 1) { return; }
  node.addClass('fshLink fshGreen');
  node.on('click', selectMoves);
}
