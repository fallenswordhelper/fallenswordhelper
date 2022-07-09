import { defTable } from '../support/constants';
import isObject from '../common/isObject';
import { moveRe } from './assets';
import { getOldIds, getOpts } from './setOpts';

function colourNewRow(row, id) { // jQuery
  if (!getOldIds()?.[id]) {
    row.css('background-color', '#F5F298');
    row.find('tr').css('background-color', '#F5F298');
  }
}

function checkTournamentId(row, theCells) { // jQuery
  const matches = /#\s(?<id>\d+)/.exec(theCells.eq(0).text());
  if ([matches, getOpts()?.id].every(isObject)) {
    // eslint-disable-next-line prefer-destructuring
    getOpts().id[matches[1]] = matches[1];
    colourNewRow(row, matches[1]);
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

function boolData(i, el) { // jQuery
  const matches = /(?<move>\d)\.png/.exec($('img', el).attr('src'));
  if (matches) { $(el).attr('data-order', matches[1]); }
}

function theBools(theCells) {
  theCells.slice(4, 7).each(boolData);
}

function hazMaxMoves(matches, row) { // jQuery
  if (getOpts().moves[matches[1]] && getOpts().moves[matches[1]] === 3) {
    row.addClass('moveMax');
  }
}

function optsHazMoves(cell, row) { // jQuery
  const matches = moveRe.exec($('img', cell).attr('src'));
  if (matches) {
    hazMaxMoves(matches, row);
    cell.attr('data-order', matches[1]);
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

function prepareData(i, e) { // jQuery
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
