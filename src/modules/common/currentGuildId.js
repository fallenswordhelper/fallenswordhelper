import getArrayByTagName from './getArrayByTagName';
import getText from './getText';

let guildId;

function getGuildId(el) {
  const match = getText(el).match(/\sguildId: (\d{1,6}),/);
  if (match) { guildId = Number(match[1]); }
}

export default function currentGuildId() {
  if (!guildId) {
    getArrayByTagName('script', document.body).forEach(getGuildId);
  }
  return guildId;
}
