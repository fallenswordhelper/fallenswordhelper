import { c as createInput } from './createInput-fee5fccc.js';
import { a as allthen } from './allthen-259c1952.js';
import { w as callApp, bv as guildRE, G as getTextTrim, s as partial, m as getArrayByTagName, d as defTable, p as pCC, aJ as isUndefined, U as nowSecs, f as insertHtmlBeforeEnd, H as getValue, aN as hideQTip, P as isArray, bw as daViewProfile, X as sendEvent, g as getElementsByTagName, o as onclick, j as jQueryPresent, ae as isObject } from './calfSystem-cc2b30b5.js';
import { g as guild } from './guild-b4b44a5f.js';
import { p as playerName } from './playerName-bc6aeb96.js';
import { c as currentGuildId } from './currentGuildId-6f36e6e5.js';
import { o as onlineDot } from './onlineDot-c3b7100a.js';
import { g as getLowerPvpLevel, a as getUpperPvpLevel } from './levelHighlight-d4fdb06f.js';
import { c as createSpan } from './createSpan-6522d45b.js';
import { h as hideElement } from './hideElement-eb117e0e.js';
import { f as functionPasses } from './functionPasses-bfa8b450.js';
import { i as insertElementAfterBegin } from './insertElementAfterBegin-7ae9ae7a.js';
import './all-978030c9.js';
import './intValue-55d66e09.js';
import './valueText-21f582fc.js';
import './insertElementBefore-0a7f2602.js';

function findplayer(username) {
  return callApp({
    cmd: 'findplayer',
    subcmd: 'view',
    search_username: username,
  });
}

// import { $dataAccess } from './_dataAccess';
// import findPlayer from './fallbacks/findPlayer';

function daFindPlayer(username) {
  // return $dataAccess(appFindPlayer, findPlayer, username);
  return findplayer(username);
}

function guildView(guildId) {
  return guild({ subcmd: 'view', guild_id: guildId });
}

// import { $dataAccess } from './_dataAccess';
// import guildView from './fallbacks/guildView';

function daGuildView(guildId) {
  // return $dataAccess(appGuildView, guildView, guildId);
  return guildView(guildId);
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
  () => isObject(pCC),
  () => isObject(pCC.children[0]),
  () => isObject(pCC.children[0].rows),
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
//# sourceMappingURL=toprated-c0697d28.js.map
