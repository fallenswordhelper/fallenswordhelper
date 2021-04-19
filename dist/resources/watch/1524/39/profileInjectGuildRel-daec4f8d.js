import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-d5c49dc8.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-e7b10a8a.js';
import { g as getIsSelf } from './profile-7e0d9462.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-1fa15913.js';
import { s as shouldBeArray } from './shouldBeArray-fb904b4d.js';
import { t as toLowerCase } from './toLowerCase-179aa35f.js';
import './currentGuildId-5c2ac6d6.js';
import './colouredDots-1748bbce.js';
import './batch-b640894a.js';
import './onlineDot-b65474c0.js';
import './doStatTotal-44b8b054.js';
import './executeAll-ed9a2868.js';
import './playerName-73fd680e.js';
import './intValue-f6303c59.js';
import './valueText-8cb2a936.js';
import './interceptSubmit-81e5b5bb.js';
import './formToUrl-14c2f9ee.js';
import './csvSplit-ec367ad9.js';

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
//# sourceMappingURL=profileInjectGuildRel-daec4f8d.js.map
