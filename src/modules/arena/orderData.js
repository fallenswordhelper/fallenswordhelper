import isObject from '../common/isObject';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { defTable } from '../support/constants';
import { moveRe } from './assets';
import { getOldIds, getOpts } from './setOpts';

function colourNewRow(row, id) { // jQuery
  if (!getOldIds()?.[id]) {
    row.css('background-color', '#F5F298');
    row.find('tr').css('background-color', '#F5F298');
  }
}

function checkTournamentId(row, theCells) { // jQuery
  const tournamentId = regExpFirstCapture(/#\s(?<id>\d+)/, theCells.eq(0).text());
  if (tournamentId && isObject(getOpts()?.id)) {
    getOpts().id[tournamentId] = tournamentId;
    colourNewRow(row, tournamentId);
  }
}

function players(theCells) { // jQuery
  const cell = theCells.eq(1);
  const matches = cell.text().split(/\s\/\s/);
  if (matches) {
    cell.attr('data-order', (Number(matches[0]) - Number(matches[1])) * 100 + Number(matches[1]));
  }
}

function joinCost(theCells) {
  const cell = theCells.eq(2);
  cell.attr('data-order', $('td', cell).first().text().replace(/[,\s]/g, ''));
}

function boolData(_i, el) { // jQuery
  const matches = regExpFirstCapture(/(?<move>\d)\.png/, $('img', el).attr('src'));
  if (matches) { $(el).attr('data-order', matches); }
}

function theBools(theCells) {
  theCells.slice(4, 7).each(boolData);
}

function hazMaxMoves(moveId, row) { // jQuery
  if (getOpts()?.moves?.[moveId] === 3) row.addClass('moveMax');
}

function optsHazMoves(cell, row) { // jQuery
  const moveId = regExpFirstCapture(moveRe, $('img', cell).attr('src'));
  if (moveId) {
    hazMaxMoves(moveId, row);
    cell.attr('data-order', moveId);
  }
}

function maxMoves(theCells, row) { // jQuery
  const cell = theCells.eq(8);
  if (getOpts()?.moves) {
    optsHazMoves(cell, row);
  }
}

function reward(theCells) { // jQuery
  const cell = theCells.eq(8);
  if (cell.children(defTable).length !== 1) { return; }
  cell.attr('data-order', cell.find('td').first().text().replace(/[,\s]/g, ''));
}

function prepareData(_i, e) { // jQuery
  const row = $(e);
  const theCells = row.children();
  checkTournamentId(row, theCells);
  players(theCells);
  joinCost(theCells);
  theBools(theCells);
  maxMoves(theCells, row);
  reward(theCells);
}

export default function orderData(theTables) {
  const myRows = theTables.children('tbody').children('tr');
  myRows.each(prepareData);
}
