import addCommas from '../../system/addCommas';
import lastActivityToDays from '../../common/lastActivityToDays';
import {nowSecs} from '../../support/now';
import partial from '../../common/partial';

function byMember(prev, curr) {
  // if (curr.b === 11503) { // Zombie Brew
  prev[curr.player_id] = prev[curr.player_id] || [];
  prev[curr.player_id].push(curr);
  // }
  return prev;
}

function addRank(rank_name, thisMember) {
  thisMember.rank_name = rank_name;
  return thisMember;
}

function extractMembers(thisRank) {
  return thisRank.members.map(partial(addRank, thisRank.name));
}

function processGuild(guild) {
  return [].concat(...guild.r.ranks.map(extractMembers));
}

function decorateMembers(pots, obj, i) {
  obj.slot = i + 1;
  obj.name_lower = obj.name.toLowerCase();
  obj.lvl_reverse = 0 - obj.level;
  obj.rank_lower = obj.rank_name.trim().toLowerCase();
  obj.gxp = addCommas(obj.guild_xp);
  obj.gxp_reverse = 0 - obj.guild_xp;
  obj.activity = lastActivityToDays(obj.last_activity);
  obj.act = obj.last_activity - nowSecs;
  obj.pack = (pots[obj.id] || []).length;
  obj.pack_reverse = 0 - (pots[obj.id] || []).length;
  obj.stam = addCommas(obj.current_stamina);
  obj.stam_reverse = 0 - obj.current_stamina;
  return obj;
}

export default function prepareData([json, guild]) {
  // console.log(json);
  const pots = json.items.reduce(byMember, {});
  // console.log('pots', pots);
  const members = processGuild(guild);
  // console.log('members', members);
  return members.map(partial(decorateMembers, pots));
}