import { X as setValue, ah as toLowerCase, C as getText, I as getValue, f as insertHtmlBeforeEnd, a1 as escapeHtml } from './calfSystem-02fd040d.js';
import { g as getGuildALink, a as getIsOwnGuild } from './getIsOwnGuild-8aff56f7.js';
import { g as getIsSelf } from './profile-e524da1b.js';
import { r as replaceDoubleSpace } from './replaceDoubleSpace-c93e5cc1.js';
import { s as shouldBeArray } from './shouldBeArray-f79b16d1.js';
import './currentGuildId-b6506645.js';
import './colouredDots-4c7353d3.js';
import './batch-14579652.js';
import './onlineDot-1f7e5ebe.js';
import './doStatTotal-aa9bff96.js';
import './executeAll-4bb3b899.js';
import './playerName-512f3e50.js';
import './asInt-6102ee12.js';
import './intValue-a6f9b475.js';
import './valueText-1e3feaa3.js';
import './interceptSubmit-091d1f17.js';
import './formToUrl-37eb4bb6.js';
import './csvSplit-95ff5434.js';

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
//# sourceMappingURL=profileInjectGuildRel-57e96c82.js.map
