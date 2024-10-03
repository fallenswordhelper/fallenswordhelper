import fromEntries from '../../common/fromEntries';
import lastActivityToDays from '../../common/lastActivityToDays';
import toLowerCase from '../../common/toLowerCase';
import trim from '../../common/trim';
import uniq from '../../common/uniq';
import { nowSecs } from '../../support/now';
import addCommas from '../../system/addCommas';

const notEquipped = ({ equipped }) => !equipped;
const playerId = ({ player: { id } }) => id;
const addRank = (rankName) => (thisMember) => ({
  ...thisMember,
  rank_name: rankName,
});
const extractMembers = (thisRank) =>
  thisRank.members.map(addRank(thisRank.name));
const processGuild = (guild) => guild.r.flatMap(extractMembers);
const decorateMembers = (pots) => (member, index) => ({
  ...member,
  slot: index + 1,
  name_lower: toLowerCase(member.name),
  lvl_reverse: 0 - member.level,
  rank_lower: toLowerCase(trim(member.rank_name)),
  gxp: addCommas(member.guild_xp),
  gxp_reverse: 0 - member.guild_xp,
  activity: lastActivityToDays(member.last_activity),
  act: member.last_activity - nowSecs(),
  pack: pots[member.id] ?? 0,
  pack_reverse: 0 - (pots[member.id] ?? 0),
  stam: addCommas(member.max_stamina),
  stam_reverse: 0 - member.max_stamina,
});

export default function prepareData([json, guild]) {
  const inv = json.r.filter(notEquipped).map(playerId);
  const perPlayer = fromEntries(
    uniq(inv).map((id) => [id, inv.filter((i) => i === id).length]),
  );
  const members = processGuild(guild);
  return members.map(decorateMembers(perPlayer));
}
