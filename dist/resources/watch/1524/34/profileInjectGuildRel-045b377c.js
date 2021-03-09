import { W as setValue, B as getText, H as getValue, f as insertHtmlBeforeEnd, a0 as escapeHtml } from './calfSystem-d1de1997.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-82815e2d.js';
import { g as getIsSelf } from './profile-c9b60fda.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-847b7e5a.js';
import { s as shouldBeArray } from './shouldBeArray-636558da.js';
import { t as toLowerCase } from './toLowerCase-82b2a5d7.js';
import './currentGuildId-5f3c5fc9.js';
import './colouredDots-2f080c78.js';
import './batch-aa534794.js';
import './onlineDot-01aad102.js';
import './doStatTotal-ebae9602.js';
import './executeAll-7837be0f.js';
import './playerName-3a91fc0e.js';
import './intValue-d2a6f461.js';
import './valueText-36756778.js';
import './interceptSubmit-4e3a3084.js';
import './formToUrl-02aea8be.js';
import './csvSplit-5e072bd9.js';

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
//# sourceMappingURL=profileInjectGuildRel-045b377c.js.map
