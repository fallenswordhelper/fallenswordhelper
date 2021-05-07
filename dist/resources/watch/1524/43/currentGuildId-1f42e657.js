import { m as getArrayByTagName, C as getText } from './calfSystem-476ab75d.js';

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
//# sourceMappingURL=currentGuildId-1f42e657.js.map
