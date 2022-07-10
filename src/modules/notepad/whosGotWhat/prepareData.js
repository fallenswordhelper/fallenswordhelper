import lastActivityToDays from '../../common/lastActivityToDays';
import partial from '../../common/partial';
import toLowerCase from '../../common/toLowerCase';
import trim from '../../common/trim';
import { getNowSecs } from '../../support/now';
import addCommas from '../../system/addCommas';

function byMember(acc, curr) {
  // if (curr.item_id === 11503) { // Zombie Brew
  if (!curr.equipped) {
  // if (curr.equipped) {
    acc[curr.player_id] = acc[curr.player_id] || [];
    acc[curr.player_id].push(curr);
  }
  return acc;
}

const addRank = (rankName, thisMember) => ({ ...thisMember, rank_name: rankName });
const extractMembers = (thisRank) => thisRank.members.map(partial(addRank, thisRank.name));
const processGuild = (guild) => guild.r.flatMap(extractMembers);

function decorateMembers(pots, obj, i) {
  return {
    ...obj,
    slot: i + 1,
    name_lower: toLowerCase(obj.name),
    lvl_reverse: 0 - obj.level,
    rank_lower: toLowerCase(trim(obj.rank_name)),
    gxp: addCommas(obj.guild_xp),
    gxp_reverse: 0 - obj.guild_xp,
    activity: lastActivityToDays(obj.last_activity),
    act: obj.last_activity - getNowSecs(),
    pack: (pots[obj.id] || []).length,
    pack_reverse: 0 - (pots[obj.id] || []).length,
    stam: addCommas(obj.max_stamina),
    stam_reverse: 0 - obj.max_stamina,
  };
}

export default function prepareData([json, guild]) {
  const pots = json.items.reduce(byMember, {});
  const members = processGuild(guild);
  return members.map(partial(decorateMembers, pots));
}
