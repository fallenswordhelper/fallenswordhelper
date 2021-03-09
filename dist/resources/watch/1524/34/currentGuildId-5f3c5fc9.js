import { m as getArrayByTagName, B as getText } from './calfSystem-d1de1997.js';

let guildId;

function getGuildId(el) {
  const match = getText(el).match(/\s+guildId: ([0-9]+),/);
  if (match) { guildId = Number(match[1]); }
}

function currentGuildId() {
  if (!guildId) {
    getArrayByTagName('script', document.body).forEach(getGuildId);
  }
  return guildId;
}

export { currentGuildId as c };
//# sourceMappingURL=currentGuildId-5f3c5fc9.js.map
