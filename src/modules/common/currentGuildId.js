import getArrayByTagName from './getArrayByTagName';
import getText from './getText';
import regExpFirstCapture from './regExpFirstCapture';

let guildId;

function getGuildId(el) {
  const match = regExpFirstCapture(/\sguildId: (\d{1,6}),/, getText(el));
  if (match) { guildId = Number(match); }
}

export default function currentGuildId() {
  if (!guildId) {
    getArrayByTagName('script', document.body).forEach(getGuildId);
  }
  return guildId;
}
