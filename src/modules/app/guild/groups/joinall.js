import guildGroups from './guildGroups';

export default function joinall(group) {
  return guildGroups({ subcmd2: 'joinall', group });
}
