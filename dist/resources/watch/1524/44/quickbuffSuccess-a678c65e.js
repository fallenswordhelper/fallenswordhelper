import { t as createDocument, u as indexAjaxData, x as callApp, $ as $dataAccess } from './calfSystem-23094c64.js';
import { g as getBuff, b as buffReportParser } from './getBuff-e4fac413.js';

function getBuffId(buff) {
  const thisBuff = getBuff(buff);
  if (thisBuff) { return thisBuff.id; }
  return -1;
}

const playerName = (result) => result[3] || result[6] || result[7];
const successObject = (result) => (
  { id: getBuffId(result[1]), level: Number(result[2]) }
);

function failObject(result) {
  if (result[4]) {
    return { id: getBuffId(result[4]), reason: result[5] };
  }
  return { id: getBuffId(result[9]), reason: result[8] };
}

function byPlayer(acc, curr) {
  const thisPlayer = playerName(curr);
  let thisObj = acc.find((o) => o.player.name === thisPlayer);
  if (!thisObj) {
    thisObj = { player: { name: thisPlayer }, casts: [], failed: [] };
    acc.push(thisObj);
  }
  if (curr[1]) {
    thisObj.casts.push(successObject(curr));
  } else {
    thisObj.failed.push(failObject(curr));
  }
  return acc;
}

function buffFormatter(buffsParsed) {
  const buffsByPlayer = buffsParsed.reduce(byPlayer, []); // FIXME
  return { r: buffsByPlayer, s: true };
}

function formatResponse(html) {
  const buffsParsed = buffReportParser(createDocument(html));
  return buffFormatter(buffsParsed);
}

function quickbuff$1(userAry, buffAry) {
  return indexAjaxData({
    cmd: 'quickbuff',
    subcmd: 'activate',
    targetPlayers: userAry.join(),
    skills: buffAry,
  }).then(formatResponse);
}

function quickbuff(userAry, buffAry) {
  return callApp({
    cmd: 'quickbuff',
    subcmd: 'activate',
    username: userAry,
    skill: buffAry,
  });
}

function daQuickbuff(userAry, buffAry) {
  return $dataAccess(quickbuff, quickbuff$1, userAry, buffAry);
}

function quickbuffSuccess(result) {
  return result.s && result.r[0].casts.length === 1;
}

export { daQuickbuff as d, quickbuffSuccess as q };
//# sourceMappingURL=quickbuffSuccess-a678c65e.js.map
