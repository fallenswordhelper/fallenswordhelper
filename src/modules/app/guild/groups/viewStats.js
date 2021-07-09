import guildGroups from './guildGroups';

export default function viewStats(groupId) {
  return guildGroups({ subcmd2: 'viewstats', group_id: groupId });
}
