export default function getBuffLevel(player, buffId) {
  return player._skills.find(d => d.id === buffId)?.level;
}
