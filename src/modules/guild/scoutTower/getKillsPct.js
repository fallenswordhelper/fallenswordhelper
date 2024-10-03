export default function getKillsPct(currentNumberOfKills, guildKills) {
  if (currentNumberOfKills === 0) {
    return 0;
  }
  return (guildKills * 100) / currentNumberOfKills;
}
