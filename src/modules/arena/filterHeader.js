import { arenaFilter } from './assets';
import defaults from '../support/dataObj.json';
import {
  changeLvls, getOpts, hideMoves, resetLvls,
} from './setOpts';

function makeTheRow() {
  const theRow = $('#pCC > table > tbody > tr:nth-child(4)');
  theRow.clone().insertBefore(theRow).find('td').attr('height', '2');
  theRow.clone().insertAfter(theRow).find('td').attr('height', '1');
  return theRow;
}

function hideMovesCheckbox(aTable) { // jQuery
  const fshHideMoves = $('#fshHideMoves', aTable);
  if (getOpts()?.hideMoves != null) { // skipcq: JS-0050
    fshHideMoves.prop('checked', getOpts().hideMoves);
    $('.moveMax').toggle(!getOpts().hideMoves);
  }
  fshHideMoves.on('click', hideMoves);
}

function minLvlValue(aTable) { // jQuery
  const fshMinLvl = $('#fshMinLvl', aTable);
  fshMinLvl.val(getOpts()?.minLvl ?? defaults.arenaMinLvl);
}

function maxLvlValue(aTable) { // jQuery
  const fshMaxLvl = $('#fshMaxLvl', aTable);
  fshMaxLvl.val(getOpts()?.maxLvl ?? defaults.arenaMaxLvl);
}

function eventHandlers(aTable) {
  $('#fshMinLvl, #fshMaxLvl', aTable).on('keyup', changeLvls);
  $('#fshReset', aTable).on('click', resetLvls);
}

export default function filterHeader() { // jQuery
  const theRow = makeTheRow();
  const aTable = $(arenaFilter);
  hideMovesCheckbox(aTable);
  minLvlValue(aTable);
  maxLvlValue(aTable);
  eventHandlers(aTable);
  $('td', theRow).append(aTable);
}
