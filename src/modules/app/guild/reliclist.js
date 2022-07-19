import guild from './guild';

export default function reliclist(guildId, offset, limit) {
  const data = {
    subcmd: 'reliclist',
    ...guildId && { guild_id: guildId },
    offset,
    limit,
  };

  return guild(data);
}
