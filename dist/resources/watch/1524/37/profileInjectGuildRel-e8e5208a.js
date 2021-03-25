import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-6840a38e.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-5045c430.js';
import { g as getIsSelf } from './profile-cb28acde.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-41145c5b.js';
import { s as shouldBeArray } from './shouldBeArray-31f202d6.js';
import { t as toLowerCase } from './toLowerCase-9d38da0b.js';
import './currentGuildId-00d4d0e4.js';
import './colouredDots-a62752e1.js';
import './batch-bdb21ead.js';
import './onlineDot-0a5dc664.js';
import './doStatTotal-d40c4f8b.js';
import './executeAll-30ce254f.js';
import './playerName-2d72a4c8.js';
import './intValue-0e97c9b9.js';
import './valueText-6241396f.js';
import './interceptSubmit-7a9128a3.js';
import './formToUrl-a4a392eb.js';
import './csvSplit-0c234404.js';

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
//# sourceMappingURL=profileInjectGuildRel-e8e5208a.js.map
