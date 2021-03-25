import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-c08399e5.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-4630f561.js';
import { g as getIsSelf } from './profile-a1504ca2.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-35387d1e.js';
import { s as shouldBeArray } from './shouldBeArray-c62c5e59.js';
import { t as toLowerCase } from './toLowerCase-fa335220.js';
import './currentGuildId-915d45b4.js';
import './colouredDots-5ca30738.js';
import './batch-f79939df.js';
import './onlineDot-753c9d97.js';
import './doStatTotal-2476f0e1.js';
import './executeAll-a7ad7ece.js';
import './playerName-34451b45.js';
import './intValue-ca51a3c0.js';
import './valueText-95433860.js';
import './interceptSubmit-c60dab5a.js';
import './formToUrl-4cfd88e5.js';
import './csvSplit-482f2ccd.js';

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
//# sourceMappingURL=profileInjectGuildRel-4ef1f841.js.map
