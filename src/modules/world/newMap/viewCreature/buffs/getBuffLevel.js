export default function getBuffLevel(player, buffId) {
  return player.skills.find(d => d.id === buffId)?.level;
}
