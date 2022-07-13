export default function effectiveStat(combat, groupValue, playerValue) {
  if (combat.callback.groupExists) {
    return groupValue;
  }
  return playerValue;
}
