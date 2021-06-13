import { X as setValue, ah as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a1 as escapeHtml } from './calfSystem-86663d02.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-dc6a8fd8.js';
import { g as getIsSelf } from './profile-3fb4698a.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-6ee06bc8.js';
import { s as shouldBeArray } from './shouldBeArray-2a904bb9.js';
import './currentGuildId-c3b232af.js';
import './colouredDots-75bb1a90.js';
import './batch-b4fa4f4c.js';
import './onlineDot-b978e663.js';
import './doStatTotal-a90a5cb0.js';
import './executeAll-9a33204f.js';
import './playerName-774091a1.js';
import './asInt-e8fa21e2.js';
import './intValue-19726e4b.js';
import './valueText-d8194e49.js';
import './interceptSubmit-b6f9d345.js';
import './formToUrl-bdc5f748.js';
import './csvSplit-d0e27857.js';

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
//# sourceMappingURL=profileInjectGuildRel-b783e21f.js.map
