import { W as setValue, B as getText, H as getValue, f as insertHtmlBeforeEnd, a0 as escapeHtml } from './calfSystem-cc2b30b5.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-ef8f1ca7.js';
import { g as getIsSelf } from './profile-9e1867c9.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-1171b4a9.js';
import { s as shouldBeArray } from './shouldBeArray-4c618bea.js';
import { t as toLowerCase } from './toLowerCase-abb30c3b.js';
import './currentGuildId-6f36e6e5.js';
import './colouredDots-7921860f.js';
import './batch-96692bf0.js';
import './onlineDot-c3b7100a.js';
import './doStatTotal-13468b3f.js';
import './executeAll-f0c9235d.js';
import './playerName-bc6aeb96.js';
import './intValue-55d66e09.js';
import './valueText-21f582fc.js';
import './interceptSubmit-d78c86f8.js';
import './formToUrl-3b72b00b.js';
import './csvSplit-d4535156.js';

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
//# sourceMappingURL=profileInjectGuildRel-3928f96e.js.map
