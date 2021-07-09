import guild from './guild';

export default function view(guildId) {
  return guild({ subcmd: 'view', guild_id: guildId });
}
