import createStyle from '../common/cElement/createStyle';
import dataRows from '../common/dataRows';
import doBuffLink from '../common/doBuffLink';
import doBuffLinkClick from '../common/doBuffLinkClick';
import entries from '../common/entries';
import getTextTrim from '../common/getTextTrim';
import insertElement from '../common/insertElement';
import onclick from '../common/onclick';
import partial from '../common/partial';
import querySelector from '../common/querySelector';
import { playerLinkSelector } from '../support/constants';
import getValue from '../system/getValue';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import setValue from '../system/setValue';
import getLastTable from './playerLogWidgets/getLastTable';

let nowUtc = 0;
let lastCheckUtc = 0;

function findChatTable(logScreen) {
  if (['Chat', 'Leader'].includes(logScreen)) {
    return querySelector('#pCC table table table table');
  }
  return getLastTable();
}

function isOldRow(postAgeMins, postDateUtc) {
  return postAgeMins > 20 && postDateUtc <= lastCheckUtc;
}

function getLastCheck(lastCheckScreen) {
  return getValue(lastCheckScreen) || nowUtc;
}

function typeMap(dateColumn, aRow) {
  let rowType = 'old';
  const postDateUtc = parseDateAsTimestamp(getTextTrim(aRow.cells[dateColumn]));
  const postAgeMins = (nowUtc - postDateUtc) / (1000 * 60);
  if (!isOldRow(postAgeMins, postDateUtc)) {
    rowType = postDateUtc > lastCheckUtc ? 'new' : 'seen';
  }
  return [aRow, rowType];
}

function doBuffLinks(logScreen, rowTags) {
  if (logScreen === 'Chat') {
    rowTags.filter(([, rowType]) => rowType !== 'old')
      .map(([aRow]) => querySelector(playerLinkSelector, aRow))
      .forEach(doBuffLink);
  }
}

function byType(acc, [aRow, rowType]) {
  const rowNumber = aRow.rowIndex + 1;
  if (acc[rowType]) {
    acc[rowType] = {
      min: Math.min(acc[rowType].min, rowNumber),
      max: Math.max(acc[rowType].min, rowNumber),
    };
  } else {
    acc[rowType] = { min: rowNumber, max: rowNumber };
  }
  return acc;
}

function toStyle(spacing, [rowType, { min, max }]) {
  return `.fshLogColoring tr:nth-of-type(${spacing}n+${min}):nth-of-type(-${
    spacing}n+${max}) {background-color: ${
    rowType === 'old' ? '#CD9E4B' : '#F5F298'};}`;
}

function makeRowStyle(logScreen, rowTags) {
  const spacing = logScreen === 'Chat' ? 4 : 2;
  return entries(rowTags.filter(([, rowType]) => rowType !== 'seen')
    .reduce(byType, {}))
    .map(partial(toStyle, spacing));
}

function processRows(logScreen, dateColumn, chatTable, cols) {
  const rowTags = dataRows(chatTable, cols, 0).map(partial(typeMap, dateColumn));
  doBuffLinks(logScreen, rowTags);
  const rowStyle = makeRowStyle(logScreen, rowTags);
  if (rowStyle.length) {
    insertElement(document.body, createStyle(rowStyle.join('\n')));
  }
}

function doLogColoring(logScreen, dateColumn, chatTable, cols) {
  chatTable.classList.add('fshLogColoring');
  nowUtc = new Date().setUTCSeconds(0, 0) - 1;
  const lastCheckScreen = `last${logScreen}Check`;
  lastCheckUtc = getLastCheck(lastCheckScreen);
  processRows(logScreen, dateColumn, chatTable, cols);
  onclick(chatTable, doBuffLinkClick);
  setValue(lastCheckScreen, nowUtc);
}

export default function addLogColoring(logScreen, dateColumn, cols) {
  if (!getValue('enableLogColoring')) { return; }
  const chatTable = findChatTable(logScreen);
  if (chatTable) { doLogColoring(logScreen, dateColumn, chatTable, cols); }
}
