import indexAjaxDoc from '../ajax/indexAjaxDoc';
import log from '../app/guild/log';
import getText from '../common/getText';
import getTextTrim from '../common/getTextTrim';
import querySelector from '../common/querySelector';
import querySelectorArray from '../common/querySelectorArray';
import regExpExec from '../common/regExpExec';
import regExpFirstCapture from '../common/regExpFirstCapture';
import { guildRE, playerIDRE } from '../support/constants';
import { publish } from '../support/pubsub';
import getValue from '../system/getValue';
import parseDateAsTimestamp from '../system/parseDateAsTimestamp';
import $dataAccess from './$dataAccess';

let newGuildLogHistoryPages = 3;
let replaceIndex = 0;
let replaceOffset = 0;

function serverError() {
  publish('guildLog-progress', 'Server Error.');
}

function getGuildLogPage(page) {
  return indexAjaxDoc({
    cmd: 'guild',
    subcmd: 'log',
    page,
  });
}

function isLastPage(thisChunk) {
  const pageInput = querySelector('input[name="page"]', thisChunk);
  const currPage = Number(pageInput.value);
  publish('guildLog-progress', `page ${currPage}`);
  const [matches] = regExpExec(/\d+/, getText(pageInput.parentNode));
  const maxPage = Math.min(Number(matches), newGuildLogHistoryPages);
  return currPage >= maxPage;
}

async function buildLog(page = 1, acc = []) {
  const thisChunk = await getGuildLogPage(page);
  if (!thisChunk) return serverError();
  const newAcc = acc.concat(thisChunk);
  if (isLastPage(thisChunk)) return newAcc;
  return buildLog(page + 1, newAcc);
}

const isLogEntry = ({ cells }) => cells.length === 3;
const replaceAnchor = (match, offset) => {
  replaceIndex = offset > replaceOffset ? replaceIndex + 1 : 0;
  replaceOffset = offset;
  return `<link=a${replaceIndex}></link>`;
};

function toObject([anchor]) {
  const playerId = regExpFirstCapture(playerIDRE, anchor);
  if (playerId) {
    return {
      data: {
        id: playerId,
        name: regExpFirstCapture(/>(?=([^<]+))\1</, anchor),
      },
      type: 0,
    };
  }
  const guildId = regExpFirstCapture(guildRE, anchor);
  if (guildId) {
    return {
      data: {
        id: guildId,
        name: regExpFirstCapture(/>(?=([^<]+))\1</, anchor),
      },
      type: 1,
    };
  }
  return {};
}

function toApp(doc) {
  const rows = querySelectorArray('.width_full tr', doc).slice(1).filter(isLogEntry);
  const result = rows
    .map((tr) => [tr, tr.cells[2].innerHTML])
    .map(([tr, before]) => [tr, before, regExpFirstCapture(/;combat_id=(\d+)/, before)])
    .map(([tr, before, combat]) => [tr, before, combat, before.split('&nbsp;&nbsp;[')[0]])
    .map(([tr, before, combat, text]) => ({
      msg: {
        before,
        combat,
        text: text.replace(/<a.+?a>/g, replaceAnchor),
        attachments: (combat && [{ data: Number(combat), type: 11 }]) ?? [...text.matchAll(/<a.+?a>/g)].map(toObject),
      },
      time: parseDateAsTimestamp(getTextTrim(tr.cells[1])) / 1000,
      ...(combat && { type: 17 }),
    }));
  return result;
}

async function fallback() {
  newGuildLogHistoryPages = Number(getValue('newGuildLogHistoryPages'));
  const builtLog = await buildLog();
  const mapped = builtLog.flatMap(toApp);
  return mapped;
}

async function getGuildLog(logId = -1, direction = 1, acc = []) {
  const limit = 1000;
  const thisChunk = await log(logId, direction, limit);
  if (!thisChunk?.s) return serverError();
  publish('guildLog-progress');
  const newAcc = acc.concat(thisChunk.r.logs);
  if (thisChunk.r.logs.length !== limit) {
    return newAcc;
  }
  return getGuildLog(thisChunk.r.logs[0].id, 0, newAcc);
}

export default function daGuildLog() {
  const test = 1;
  if (test) return fallback();
  return $dataAccess(getGuildLog, fallback);
}
