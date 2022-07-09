import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import getMembrList from '../../../ajax/getMembrList';
import { getNowSecs } from '../../../support/now';
import getValue from '../../../system/getValue';
import hideElement from '../../../common/hideElement';
import insertElement from '../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import keys from '../../../common/keys';
import partial from '../../../common/partial';
import { playerIdUrl } from '../../../support/constants';
import { atkStats, defStats, proc } from './assets';
import {
  getContainerDiv,
  getFetchStatsBtn,
  getLeftDiv,
  getMyDefenders,
} from './primaryElements';

let guildMemberList = 0;
let twoMinutesAgo = 0;
let sevenDaysAgo = 0;

let relicCountElement = 0;
let ldPercentageElement = 0;
let ldCloakedElement = 0;
let attackElement = 0;
let attackBuffedElement = 0;
let defenseElement = 0;
let defenseBuffedElement = 0;
let armorElement = 0;
let armorBuffedElement = 0;
let damageElement = 0;
let damageBuffedElement = 0;
let hpElement = 0;
let hpBuffedElement = 0;
let defCloakedElement = 0;
let defProcessedElement = 0;
let dc225Element = 0;
let dc175Element = 0;
let groupAttackElement = 0;
let groupAttackBuffedElement = 0;
let groupDefenseElement = 0;
let groupDefenseBuffedElement = 0;
let groupArmorElement = 0;
let groupArmorBuffedElement = 0;
let groupDamageElement = 0;
let groupDamageBuffedElement = 0;
let groupHPElement = 0;
let groupHPBuffedElement = 0;
let processingStatus = 0;

export const getRelicCountElement = () => relicCountElement;
export const getLdPercentageElement = () => ldPercentageElement;
export const getLdCloakedElement = () => ldCloakedElement;
export const getAttackElement = () => attackElement;
export const getAttackBuffedElement = () => attackBuffedElement;
export const getDefenseElement = () => defenseElement;
export const getDefenseBuffedElement = () => defenseBuffedElement;
export const getArmorElement = () => armorElement;
export const getArmorBuffedElement = () => armorBuffedElement;
export const getDamageElement = () => damageElement;
export const getDamageBuffedElement = () => damageBuffedElement;
export const getHpElement = () => hpElement;
export const getHpBuffedElement = () => hpBuffedElement;
export const getDefCloakedElement = () => defCloakedElement;
export const getDefProcessedElement = () => defProcessedElement;
export const getDc225Element = () => dc225Element;
export const getDc175Element = () => dc175Element;
export const getGroupAttackElement = () => groupAttackElement;
export const getGroupAttackBuffedElement = () => groupAttackBuffedElement;
export const getGroupDefenseElement = () => groupDefenseElement;
export const getGroupDefenseBuffedElement = () => groupDefenseBuffedElement;
export const getGroupArmorElement = () => groupArmorElement;
export const getGroupArmorBuffedElement = () => groupArmorBuffedElement;
export const getGroupDamageElement = () => groupDamageElement;
export const getGroupDamageBuffedElement = () => groupDamageBuffedElement;
export const getGroupHPElement = () => groupHPElement;
export const getGroupHPBuffedElement = () => groupHPBuffedElement;
export const getProcessingStatus = () => processingStatus;

const available = [
  (key) => key !== 'lastUpdate',
  (key) => !getMyDefenders().includes(key),
  (key) => guildMemberList[key].last_login,
  (key) => Number(guildMemberList[key].last_login) < twoMinutesAgo,
  (key) => Number(guildMemberList[key].last_login) > sevenDaysAgo,
  (key) => guildMemberList[key].level < 400 || guildMemberList[key].level > 421,
  (key) => guildMemberList[key].level < 441 || guildMemberList[key].level > 450,
];

function condition(key, fn) { return fn(key); }

function availableMembers(key) {
  return available.every(partial(condition, key));
}

function makeLinks(key) {
  return `<a href="${playerIdUrl}${guildMemberList[key].id}">${key
  }</a>`;
}

function missingMembers(membrList) {
  guildMemberList = membrList;
  twoMinutesAgo = getNowSecs() - 120;
  sevenDaysAgo = getNowSecs() - 604800;
  const filtered = keys(guildMemberList).filter(availableMembers).map(makeLinks);
  insertHtmlBeforeEnd(
    getContainerDiv(),
    '<div class="fshFloatLeft fshRelicLowDiv">'
    + `<table class="relicT"><thead><tr><th>${
      filtered.length.toString()}`
    + ' Offline guild members not at relic:</th></tr></thead>'
    + `<tbody><tr><td>${filtered.join(' ')}</td></tr></tbody>`
    + '</table></div>',
  );
}

function setDefVars() {
  relicCountElement = getElementById('relicCount');
  ldPercentageElement = getElementById('LDPercentage');
  ldCloakedElement = getElementById('LDCloaked');
  attackElement = getElementById('attackValue');
  attackBuffedElement = getElementById('attackValueBuffed');
  defenseElement = getElementById('defenseValue');
  defenseBuffedElement = getElementById('defenseValueBuffed');
  armorElement = getElementById('armorValue');
  armorBuffedElement = getElementById('armorValueBuffed');
  damageElement = getElementById('damageValue');
  damageBuffedElement = getElementById('damageValueBuffed');
  hpElement = getElementById('hpValue');
  hpBuffedElement = getElementById('hpValueBuffed');
  defCloakedElement = getElementById('defendersCloaked');
  defProcessedElement = getElementById('defendersProcessed');
}

function setAtkVars() {
  dc225Element = getElementById('DC225');
  dc175Element = getElementById('DC175');
  groupAttackElement = getElementById('GroupAttack');
  groupAttackBuffedElement = getElementById('GroupAttackBuffed');
  groupDefenseElement = getElementById('GroupDefense');
  groupDefenseBuffedElement = getElementById('GroupDefenseBuffed');
  groupArmorElement = getElementById('GroupArmor');
  groupArmorBuffedElement = getElementById('GroupArmorBuffed');
  groupDamageElement = getElementById('GroupDamage');
  groupDamageBuffedElement = getElementById('GroupDamageBuffed');
  groupHPElement = getElementById('GroupHP');
  groupHPBuffedElement = getElementById('GroupHPBuffed');
}

export function prepareSecondaryDivs(relicData) {
  hideElement(getFetchStatsBtn());
  const hideRelicOffline = getValue('hideRelicOffline');
  if (relicData.is_owner && !hideRelicOffline) {
    getMembrList(true).then(missingMembers);
  }
  insertHtmlBeforeEnd(getLeftDiv(), proc);
  processingStatus = getElementById('ProcessingStatus');
  const midDiv = createDiv({
    className: 'fshFloatLeft fshRelicMidDiv',
    innerHTML: defStats,
  });
  insertElement(getContainerDiv(), midDiv);
  setDefVars();
  const rightDiv = createDiv({
    className: 'fshFloatLeft fshRelicRightDiv',
    innerHTML: atkStats,
  });
  insertElement(getContainerDiv(), rightDiv);
  setAtkVars();
}
