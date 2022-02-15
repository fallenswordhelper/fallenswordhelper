import guild from '../guild';

export default function guildGroups(data) {
  return guild({ subcmd: 'groups', ...data });
}
