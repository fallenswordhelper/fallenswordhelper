import { Y as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-476ab75d.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-328d92ba.js';
import { g as getIsSelf } from './profile-2b08f24c.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-a61a4542.js';
import { s as shouldBeArray } from './shouldBeArray-0b8365a6.js';
import { t as toLowerCase } from './toLowerCase-999f3196.js';
import './currentGuildId-1f42e657.js';
import './colouredDots-b88d775e.js';
import './batch-6eab8928.js';
import './onlineDot-a2517130.js';
import './doStatTotal-f1ef5f3d.js';
import './executeAll-f002e740.js';
import './playerName-f6639bfd.js';
import './asInt-7509a7c4.js';
import './intValue-fefb28df.js';
import './valueText-2986631a.js';
import './interceptSubmit-1cc9bbe8.js';
import './formToUrl-3223a0cf.js';
import './csvSplit-4a4cc559.js';

const myGuildMsgs = [
  ['self', 'fshGreen', 'guildSelfMessage'],
  ['friendly', 'fshOliveDrab', 'guildFrndMessage'],
  ['old', 'fshDarkCyan', 'guildPastMessage'],
  ['enemy', 'fshRed', 'guildEnmyMessage'],
];
const typeMapping = [
  ['guildFrnd', 'friendly'],
  ['guildPast', 'old'],
  ['guildEnmy', 'enemy'],
];

function guildAry(pref) {
  const val = shouldBeArray(pref);
  if (val) {
    return val.map(replaceDoubleSpace).map(toLowerCase);
  }
  return [];
}

function externalRelationship(_txt) {
  const scenario = typeMapping.map(([pref, label]) => [guildAry(pref), label]);
  const txt = replaceDoubleSpace(toLowerCase(_txt));
  const relObj = scenario.find(([guilds]) => guilds.includes(txt));
  if (relObj) { return relObj[1]; }
}

function guildRelationship(aLink) {
  if (getIsOwnGuild()) {
    setValue('guildSelf', getText(aLink));
    return 'self';
  }
  return externalRelationship(getText(aLink));
}

function setMsg(aLink, currentGuildRelationship) {
  const [, color, pref] = myGuildMsgs.find(
    ([rel]) => rel === currentGuildRelationship,
  );
  aLink.parentNode.classList.add(color);
  const msg = getValue(pref);
  if (msg && msg.length > 0) {
    insertHtmlBeforeEnd(aLink.parentNode, `<br>${escapeHtml(msg)}`);
  }
}

function foundGuildLink(aLink) {
  const currentGuildRelationship = guildRelationship(aLink);
  if (currentGuildRelationship) {
    setMsg(aLink, currentGuildRelationship);
  }
}

function profileInjectGuildRel() {
  const aLink = getGuildALink();
  if (aLink) {
    foundGuildLink(aLink);
  } else if (getIsSelf()) {
    setValue('guildSelf', '');
  }
}

export default profileInjectGuildRel;
//# sourceMappingURL=profileInjectGuildRel-e3a6fce8.js.map
