import closestTr from '../../common/closestTr';
import createStyle from '../../common/cElement/createStyle';
import entries from '../../common/entries';
import getTextTrim from '../../common/getTextTrim';
import insertElement from '../../common/insertElement';
import insertHtmlBeforeEnd from '../../common/insertHtmlBeforeEnd';
import isGuildMate from './isGuildMate';
import { playerLinkSelector } from '../../support/constants';
import querySelectorArray from '../../common/querySelectorArray';
import { isAlly, isEnemy } from './isAllyEnemy';

function doMsgHeader(logTable, privMsg) {
  const messageHeader = logTable.rows[0].cells[2];
  if (messageHeader && !privMsg) {
    insertHtmlBeforeEnd(messageHeader, '&nbsp;&nbsp;'
      + '<span class="fshWhite">(Guild mates show up in '
      + '<span class="fshGreen">green</span>)</span>');
  }
}

async function playerType(a) {
  let type = '';
  const playerName = getTextTrim(a);
  const [guildMate, ally, enemy] = await Promise.all([
    isGuildMate(playerName),
    isAlly(playerName),
    isEnemy(playerName),
  ]);
  if (guildMate) {
    type = 'guild';
  } else if (ally) {
    type = 'ally';
  } else if (enemy) {
    type = 'enemy';
  }
  return [
    `.fshPlayerColoring tr:nth-of-type(${closestTr(a).rowIndex + 1})`
      + ' td:nth-of-type(3) > a:first-of-type',
    type,
  ];
}

function byType(acc, [style, type]) {
  if (acc[type]) {
    acc[type].push(style);
  } else {
    acc[type] = [style];
  }
  return acc;
}

const colorLookup = {
  guild: 'green',
  ally: 'blue',
  enemy: 'red',
};

function makeStyle([key, selectors]) {
  return `${selectors.join(', ')} { color: ${colorLookup[key]}; }`;
}

const foundType = ([, type]) => type;

function getPlayerStyles(playerTags) {
  return entries(playerTags.filter(foundType).reduce(byType, {})).map(makeStyle);
}

function playerStyling(logTable, playerTags, privMsg) {
  const playerStyles = getPlayerStyles(playerTags);
  if (playerStyles.length) {
    doMsgHeader(logTable, privMsg);
    logTable.classList.add('fshPlayerColoring');
    insertElement(document.body, createStyle(playerStyles.join('\n')));
  }
}

export default async function colorPlayers(logTable, privMsg) {
  const playerLinks = querySelectorArray(playerLinkSelector, logTable);
  if (!playerLinks.length) { return; }
  const playerTags = await Promise.all(playerLinks.map(playerType));
  playerStyling(logTable, playerTags, privMsg);
}
