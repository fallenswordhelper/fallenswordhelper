import allthen from '../common/allthen';
import daFindPlayer from '../_dataAccess/daFindPlayer';
import daGuildView from '../_dataAccess/daGuildView';
import daViewProfile from '../_dataAccess/daViewProfile';
import getPlayersByGuild from './getPlayersByGuild';
import isArray from '../common/isArray';
import { nowSecs } from '../support/now';
import partial from '../common/partial';
import playerName from '../common/playerName';
import sendEvent from '../analytics/sendEvent';
import uniq from '../common/uniq';
import { decoratePlayer, initDecorate } from './decoratePlayer';
import { displaySpinner, hideSpinner } from './displaySpinner';

const thisMember = ([, player], member) => member.name === player;
const big = ([guild]) => guild !== -1;
const getMembers = ({ members }) => members;
const small = ([guild]) => guild === -1;

function parsePlayer(player, data) {
  decoratePlayer(player[0], player[2], {
    last_login: String(data.last_activity),
    virtual_level: data.vl,
  });
}

function guildPlayer(guildMembers, player) {
  const member = guildMembers.find(partial(thisMember, player));
  if (member) { parsePlayer(player, member); }
}

function returnPlayer(player, json) {
  if (json && json.s && isArray(json.r) && json.r.length > 0) {
    parsePlayer(player, json.r[0]);
  }
}

function returnSelf(player, json) {
  if (json.s) {
    parsePlayer(player, {
      last_activity: nowSecs - json.r.last_activity,
      vl: json.r.virtual_level,
    });
  }
}

function parseGuild(guild, json) {
  const guildMembers = uniq(json.r.ranks, 'id').flatMap(getMembers);
  guild[1].forEach(partial(guildPlayer, guildMembers));
}

function returnGuild(guild, json) { if (json.s) { parseGuild(guild, json); } }

function ajaxGuild(guild) {
  return daGuildView(guild[0]).then(partial(returnGuild, guild));
}

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

export default function findOnlinePlayers(e) {
  sendEvent('toprated', 'FindOnlinePlayers');
  displaySpinner(e.target);
  initDecorate();
  prepareAjax();
}
