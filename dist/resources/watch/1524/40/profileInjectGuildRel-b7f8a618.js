import { X as setValue, C as getText, I as getValue, f as insertHtmlBeforeEnd, a2 as escapeHtml } from './calfSystem-81938674.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-f61dbcc8.js';
import { g as getIsSelf } from './profile-b277069c.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-2b4c3c08.js';
import { s as shouldBeArray } from './shouldBeArray-d23137c6.js';
import { t as toLowerCase } from './toLowerCase-d053e281.js';
import './currentGuildId-37902ad7.js';
import './colouredDots-6a972f9d.js';
import './batch-51c0b95b.js';
import './onlineDot-71025c2d.js';
import './doStatTotal-2ae30ff8.js';
import './executeAll-6bc810f1.js';
import './playerName-eb2e25a5.js';
import './intValue-e485889b.js';
import './valueText-41c5c37f.js';
import './interceptSubmit-1acde52b.js';
import './formToUrl-822020a1.js';
import './csvSplit-e7651da4.js';

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
//# sourceMappingURL=profileInjectGuildRel-b7f8a618.js.map