import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a1 as escapeHtml } from './calfSystem-23094c64.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-38debf43.js';
import { g as getIsSelf } from './profile-893b16a1.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-5ade2d89.js';
import { s as shouldBeArray } from './shouldBeArray-da7e3d1b.js';
import { t as toLowerCase } from './toLowerCase-c964d32b.js';
import './currentGuildId-b9442f48.js';
import './colouredDots-87faea8e.js';
import './batch-d4cff6b3.js';
import './onlineDot-3a1ae2c3.js';
import './doStatTotal-30784cd8.js';
import './executeAll-4e27c022.js';
import './playerName-d957b0e4.js';
import './asInt-24e4035a.js';
import './intValue-66f66ba9.js';
import './valueText-5134734e.js';
import './interceptSubmit-556c7605.js';
import './formToUrl-68851fbc.js';
import './csvSplit-d22d07ed.js';

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
//# sourceMappingURL=profileInjectGuildRel-b9ea3ef0.js.map
