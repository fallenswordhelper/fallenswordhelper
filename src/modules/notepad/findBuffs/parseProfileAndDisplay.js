import contains from '../../common/contains';
import getArrayByTagName from '../../common/getArrayByTagName';
import getElementById from '../../common/getElementById';
import getElementsByTagName from '../../common/getElementsByTagName';
import getText from '../../common/getText';
import onlineDot from '../../common/onlineDot';
import partial from '../../common/partial';
import querySelector from '../../common/querySelector';
import regExpExec from '../../common/regExpExec';
import regExpFirstCapture from '../../common/regExpFirstCapture';
import setInnerHtml from '../../dom/setInnerHtml';
import { defStatVl } from '../../support/constants';
import createDocument from '../../system/createDocument';
import intValue from '../../system/intValue';
import { updateProgress } from './bufferProgress';

const sustainLevelRE = /Level<br>(?<lvl>\d+)%/;

function getBioLines(bioCellHtml, findBuffNicks) {
  const myRe = new RegExp(`^.*\\b(?:(?:${
    findBuffNicks.replace(/,/g, ')|(?:')}))\\b.*$`, 'gim');
  return [...bioCellHtml.matchAll(myRe)].map((el) => el[0]);
}

function getSustain(doc) {
  const sustainLink = getArrayByTagName('a', getElementById('profileLeftColumn', doc))
    .find(contains('Sustain'));
  if (sustainLink) {
    const sustainText = sustainLink.parentNode.parentNode.parentNode
      .nextElementSibling.children[0].dataset.tipped;
    return parseInt(regExpFirstCapture(sustainLevelRE, sustainText), 10) || -1;
  }
  return 0;
}

function getInnerPlayerName(doc) {
  return getText(getElementsByTagName('h1', getElementById('pCC', doc))[0]);
}

function getInnerLevelValue(doc) {
  return intValue(getText(getElementById('profileLeftColumn', doc)
    .children[4].children[0].rows[0].cells[1]));
}

function getInnerVirtualLevel(doc) {
  return parseInt(getText(getElementById(defStatVl, doc)), 10);
}

function nameCell(doc, callback, lastActivity, bioCellHtml) { // Legacy
  const innerPlayerName = getInnerPlayerName(doc);
  const levelValue = getInnerLevelValue(doc);
  const virtualLevelValue = getInnerVirtualLevel(doc);
  const lastActivityMinutes = parseInt(lastActivity[1], 10);
  const lastActivityIMG = onlineDot({ min: lastActivityMinutes });
  const playerHREF = callback.href;
  const bioTip = bioCellHtml.replace(/['"\n]/g, '');
  return `<nobr>${lastActivityIMG}&nbsp;<a href="${playerHREF}" target="new" `
    + 'class="tip-static" '
    + `data-tipped="${bioTip}">${innerPlayerName}</a>`
    + '&nbsp;<span class="fshBlue">[<span class="a-reply fshLink" '
    + `target_player="${innerPlayerName}">m</span>]</span></nobr><br>`
    + `<span class="fshGrey">Level:&nbsp;</span>${levelValue
    }&nbsp;(${virtualLevelValue})`;
}

function openMsg(evt) {
  window.openQuickMsgDialog(evt.target.getAttribute('target_player'));
}

function doNameCell(o) {
  const newCell = o.newRow.insertCell(0);
  newCell.style.verticalAlign = 'top';
  setInnerHtml(nameCell(o.doc, o.callback, o.lastActivity, o.bioCellHtml), newCell);
  $('.a-reply').on('click', openMsg);
}

function playerInfo(lastActivity, sustainLevel, hasExtendBuff) { // Legacy
  let sustain = 'fshRed';
  if (sustainLevel >= 100) { sustain = 'fshGreen'; }
  let extend = '<span class="fshRed">No</span>';
  if (hasExtendBuff) { extend = '<span class="fshGreen">Yes</span>'; }
  return '<table><tbody><tr>'
    + '<td colspan="2" class="resAct">Last Activity:</td>'
    + `<td colspan="2"><nobr>${lastActivity[0]}</nobr></td></tr>`
    + '<tr><td class="resLbl">Sustain:'
    + `</td><td class="resVal ${sustain}">${sustainLevel}%</td>`
    + '<td class="resLbl">Extend:</td>'
    + `<td class="resVal">${extend}</td></tr>`;
}

function playerInfoCell(newRow, lastActivity, sustainLevel, hasExtendBuff) {
  const newCell = newRow.insertCell(1);
  setInnerHtml(playerInfo(lastActivity, sustainLevel, hasExtendBuff), newCell);
  newCell.style.verticalAlign = 'top';
}

function injectTextLine(newCell, el) {
  // eslint-disable-next-line no-param-reassign
  newCell.innerHTML += `${el}<br>`;
}

function buffCell(newRow, textLineArray) {
  const newCell = newRow.insertCell(2);
  textLineArray.forEach(partial(injectTextLine, newCell));
}

function updateProcessed() {
  const processedBuffers = getElementById('buffersProcessed');
  const potentialBuffers = parseInt(getText(getElementById('potentialBuffers')), 10);
  const processedBuffersCount = parseInt(getText(processedBuffers), 10);
  setInnerHtml(processedBuffersCount + 1, processedBuffers);
  if (potentialBuffers === processedBuffersCount + 1) {
    updateProgress('Done.', 'blue');
  }
}

function calcLastActivity(doc) {
  const innerPcc = getElementById('pCC', doc);
  const lastActivityElement = getElementsByTagName('p', innerPcc)[0];
  return regExpExec(/(?<mins>\d{1,2}) mins, (?<secs>\d{1,2}) secs/, getText(lastActivityElement));
}

function getExtend(doc) {
  return querySelector('img.tip-static[data-tipped*="Extend"]', doc);
}

function addRowToTable(bioCellHtml, callback, doc, textLineArray) {
  const lastActivity = calcLastActivity(doc);
  const buffTable = getElementById('buffTable');
  const newRow = buffTable.insertRow(-1);
  doNameCell({
    newRow,
    doc,
    callback,
    lastActivity,
    bioCellHtml,
  });
  playerInfoCell(newRow, lastActivity, getSustain(doc), getExtend(doc));
  buffCell(newRow, textLineArray);
}

export default function parseProfileAndDisplay(responseText, callback) { // Hybrid - Evil
  const doc = createDocument(responseText);
  const bioCellHtml = getElementById('profile-bio', doc).innerHTML;
  const textLineArray = getBioLines(bioCellHtml, callback.findBuffNicks);
  // add row to table
  if (textLineArray.length > 0) {
    addRowToTable(bioCellHtml, callback, doc, textLineArray);
  }
  updateProcessed();
}
