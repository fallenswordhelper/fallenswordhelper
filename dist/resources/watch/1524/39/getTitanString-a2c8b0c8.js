function getKillsPct(currentNumberOfKills, guildKills) {
  if (currentNumberOfKills === 0) { return 0; }
  return (guildKills * 100) / currentNumberOfKills;
}

function getTitanString(guildKills, totalHP, currentHP) {
  const numberOfKillsToSecure = Math.ceil(totalHP / 2 + 1);
  if (guildKills >= numberOfKillsToSecure) {
    return 'Secured';
  }
  const remainingKills = numberOfKillsToSecure - guildKills;
  if (remainingKills > currentHP) {
    return '<span class="fshRed">Cannot Secure</span>';
  }
  return `<span class="fshRed">${remainingKills}</span> to secure`;
}

export { getTitanString as a, getKillsPct as g };
//# sourceMappingURL=getTitanString-a2c8b0c8.js.map
