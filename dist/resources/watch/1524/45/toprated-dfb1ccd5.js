import { c as createInput } from './createInput-3da13004.js';
import { a as allthen } from './allthen-b379c12a.js';
import { x as callApp, $ as $dataAccess, bv as profile, u as indexAjaxData, t as createDocument, z as getElementById, H as getTextTrim, bE as guildRE, s as partial, m as getArrayByTagName, d as defTable, p as pCC, aU as isUndefined, V as nowSecs, f as insertHtmlBeforeEnd, I as getValue, aZ as hideQTip, P as isArray, T as sendEvent, g as getElementsByTagName, o as onclick, j as jQueryPresent } from './calfSystem-02fd040d.js';
import { g as getProfile } from './getProfile-49311f54.js';
import { g as guild } from './guild-7df4620b.js';
import { g as guildView$1 } from './guildView-a18c169e.js';
import { p as playerName } from './playerName-512f3e50.js';
import { c as currentGuildId } from './currentGuildId-b6506645.js';
import { o as onlineDot } from './onlineDot-1f7e5ebe.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel } from './levelHighlight-ec528100.js';
import { c as createSpan } from './createSpan-d9a55780.js';
import { h as hideElement } from './hideElement-53ec58d4.js';
import { f as functionPasses } from './functionPasses-f44e4b46.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-21fe50bb.js';
import './all-47be5400.js';
import './cmdExport-0fd651b6.js';
import './indexAjaxJson-3c4dab4a.js';
import './dataRows-17b071b0.js';
import './intValue-a6f9b475.js';
import './asInt-6102ee12.js';
import './valueText-1e3feaa3.js';
import './insertElementBefore-c442a2a7.js';

function findplayer(username) {
  return callApp({
    cmd: 'findplayer',
    subcmd: 'view',
    search_username: username,
  });
}

function parseReport(json) {
  let last = json.last_login;
  if (!last) { last = 0; }
  return {
    r: [{ last_activity: Number(last), vl: json.virtual_level }],
    s: true,
  };
}

// Incomplete
function findPlayer(username) {
  return getProfile(username).then(parseReport);
}

function daFindPlayer(username) {
  return $dataAccess(findplayer, findPlayer, username);
}

function guildView(guildId) {
  return guild({ subcmd: 'view', guild_id: guildId });
}

function daGuildView(guildId) {
  return $dataAccess(guildView, guildView$1, guildId);
}

function view() {
  return profile({ subcmd: 'view' });
}

// Incomplete
async function viewProfile() {
  const html = await indexAjaxData({ cmd: 'profile' });
  const doc = createDocument(html);
  const statVl = getElementById('stat-vl', doc);
  if (!statVl) { return { s: false }; }
  const vl = Number(getTextTrim(statVl));
  return {
    r: { last_activity: 0, virtual_level: vl },
    s: true,
  };
}

function daViewProfile() {
  return $dataAccess(view, viewProfile);
}

function getGuild(tbl) {
  if (tbl.rows[0].cells[0].children[0]) {
    return Number(
      guildRE.exec(tbl.rows[0].cells[0].children[0].href)[1],
    );
  }
  return -1;
}

function enumeratePlayers(playerTable) {
  return [playerTable, getTextTrim(playerTable), getGuild(playerTable)];
}

function aGuild(player, ary) { return ary[0] === player[2]; }

function aggGuilds(acc, player) {
  const thisGuild = acc.find(partial(aGuild, player));
  if (thisGuild) {
    thisGuild[1].push(player);
  } else {
    acc.push([player[2], [player]]);
  }
  return acc;
}

function smallGuild(guildId, guild) { return guild[0] === guildId; }

function rollupSmallGuilds(acc, guild) {
  let guildId = guild[0];
  if (guild[1].length < 5) { guildId = -1; }
  const thisGuild = acc.find(partial(smallGuild, guildId));
  if (thisGuild) {
    thisGuild[1] = thisGuild[1].concat(guild[1]);
  } else {
    acc.push([guildId, guild[1]]);
  }
  return acc;
}

function getPlayersByGuild() {
  return getArrayByTagName(defTable, pCC).slice(4).map(enumeratePlayers)
    .reduce(aggGuilds, []) // FIXME
    .reduce(rollupSmallGuilds, []); // FIXME
}

function getMyItem(removeBy, item) {
  if (removeBy) {
    return item[removeBy];
  }
  return item;
}

function genericFilter(removeBy, seen, item) {
  const myItem = getMyItem(removeBy, item);
  if (!seen[myItem]) {
    // eslint-disable-next-line no-param-reassign
    seen[myItem] = true;
    return true;
  }
}

function uniq(arr, removeBy) {
  return arr.filter(partial(genericFilter, removeBy, {}));
}

let highlightPlayersNearMyLvl;
let myGuildId;

const highlightTests = [
  () => highlightPlayersNearMyLvl,
  (guildId) => isUndefined(guildId) || guildId !== myGuildId,
  (guildId, data) => data.last_login >= nowSecs - 604800,
  (guildId, data) => data.virtual_level >= getLowerPvpLevel(),
  (guildId, data) => data.virtual_level <= getUpperPvpLevel(),
];

function pvpHighlight(guildId, data) {
  return highlightTests.every((el) => el(guildId, data));
}

function decoratePlayer(aTable, guildId, data) {
  insertHtmlBeforeEnd(aTable.rows[0],
    `<td>${onlineDot({ last_login: data.last_login })}</td>`);
  if (pvpHighlight(guildId, data)) {
    aTable.parentNode.parentNode.classList.add('lvlHighlight');
  }
}

function initDecorate() {
  highlightPlayersNearMyLvl = getValue('highlightPlayersNearMyLvl');
  if (highlightPlayersNearMyLvl) {
    myGuildId = currentGuildId();
  }
}

let spinner;

function hideSpinner() {
  hideElement(spinner);
}

function displaySpinner(target) {
  hideQTip(target);
  spinner = createSpan({
    className: 'fshCurveContainer fshTopListSpinner',
    innerHTML: '<div class="fshCurveEle fshCurveLbl fshOldSpinner"></div>',
  });
  target.parentNode.replaceChild(spinner, target);
}

function parsePlayer(player, data) {
  decoratePlayer(player[0], player[2], {
    last_login: String(data.last_activity),
    virtual_level: data.vl,
  });
}

function thisMember(player, member) { return member.name === player[1]; }

function guildPlayer(guildMembers, player) {
  const member = guildMembers.find(partial(thisMember, player));
  if (member) { parsePlayer(player, member); }
}

function returnPlayer(player, json) {
  if (json.s && isArray(json.r)) { parsePlayer(player, json.r[0]); }
}

function returnSelf(player, json) {
  if (json.s) {
    parsePlayer(player, {
      last_activity: nowSecs - json.r.last_activity,
      vl: json.r.virtual_level,
    });
  }
}

function big(guild) { return guild[0] !== -1; }

function getMembers(acc, curr) { return acc.concat(curr.members); }

function parseGuild(guild, json) {
  const guildMembers = uniq(json.r.ranks, 'id').reduce(getMembers, []);
  guild[1].forEach(partial(guildPlayer, guildMembers));
}

function returnGuild(guild, json) { if (json.s) { parseGuild(guild, json); } }

function ajaxGuild(guild) {
  return daGuildView(guild[0]).then(partial(returnGuild, guild));
}

function small(guild) { return guild[0] === -1; }

function ajaxPlayer(player) {
  if (player[1] !== playerName()) {
    return daFindPlayer(player[1]).then(partial(returnPlayer, player));
  }
  return daViewProfile().then(partial(returnSelf, player));
}

function prepareAjax() {
  const guilds = getPlayersByGuild();
  let prm = guilds.filter(big).map(ajaxGuild);
  const singles = guilds.find(small);
  if (singles) {
    prm = prm.concat(guilds.find(small)[1].map(ajaxPlayer));
  }
  allthen(prm, hideSpinner);
}

function findOnlinePlayers(e) {
  sendEvent('toprated', 'FindOnlinePlayers');
  displaySpinner(e.target);
  initDecorate();
  prepareAjax();
}

function looksLikeTopRated() {
  const theCell = getElementsByTagName('td', pCC)[0];
  theCell.children[0].className = 'fshTopListWrap';
  const findBtn = createInput({
    id: 'fshFindOnlinePlayers',
    className: 'custombutton tip-static',
    type: 'button',
    value: 'Find Online Players',
    dataset: {
      tipped: 'Fetch the online status of the '
        + 'top 250 players (warning ... takes a few seconds).',
    },
  });
  insertElementAfterBegin(theCell, findBtn);
  onclick(findBtn, findOnlinePlayers);
}

const topRatedTests = [
  () => jQueryPresent(),
  () => pCC,
  () => pCC.children[0],
  () => pCC.children[0].rows,
  () => pCC.children[0].rows.length > 2,
  () => getTextTrim(pCC.children[0].rows[1]).startsWith('Last Updated'),
];

function testforTopRated() {
  return topRatedTests.every(functionPasses);
}

function injectTopRated() {
  if (testforTopRated()) { looksLikeTopRated(); }
}

export default injectTopRated;
//# sourceMappingURL=toprated-dfb1ccd5.js.map
