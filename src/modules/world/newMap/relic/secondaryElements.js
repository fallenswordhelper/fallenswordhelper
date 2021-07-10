import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import getMembrList from '../../../ajax/getMembrList';
import getValue from '../../../system/getValue';
import hideElement from '../../../common/hideElement';
import insertElement from '../../../common/insertElement';
import insertHtmlBeforeEnd from '../../../common/insertHtmlBeforeEnd';
import keys from '../../../common/keys';
import { nowSecs } from '../../../support/now';
import partial from '../../../common/partial';
import { playerIdUrl } from '../../../support/constants';
import { atkStats, defStats, proc } from './assets';
import {
  containerDiv,
  fetchStatsBtn,
  leftDiv,
  myDefenders,
} from './primaryElements';

let guildMemberList;
let twoMinutesAgo;
let sevenDaysAgo;
export let relicCountElement;
export let lDPercentageElement;
export let lDCloakedElement;
export let attackElement;
export let attackBuffedElement;
export let defenseElement;
export let defenseBuffedElement;
export let armorElement;
export let armorBuffedElement;
export let damageElement;
export let damageBuffedElement;
export let hpElement;
export let hpBuffedElement;
export let defCloakedElement;
export let defProcessedElement;
export let dc225Element;
export let dc175Element;
export let groupAttackElement;
export let groupAttackBuffedElement;
export let groupDefenseElement;
export let groupDefenseBuffedElement;
export let groupArmorElement;
export let groupArmorBuffedElement;
export let groupDamageElement;
export let groupDamageBuffedElement;
export let groupHPElement;
export let groupHPBuffedElement;
export let processingStatus;

const available = [
  (key) => key !== 'lastUpdate',
  (key) => !myDefenders.includes(key),
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
  twoMinutesAgo = nowSecs - 120;
  sevenDaysAgo = nowSecs - 604800;
  const filtered = keys(guildMemberList)
    .filter(availableMembers).map(makeLinks);
  insertHtmlBeforeEnd(containerDiv,
    '<div class="fshFloatLeft fshRelicLowDiv">'
    + `<table class="relicT"><thead><tr><th>${
      filtered.length.toString()}`
    + ' Offline guild members not at relic:</th></tr></thead>'
    + `<tbody><tr><td>${filtered.join(' ')}</td></tr></tbody>`
    + '</table></div>');
}

function setDefVars() {
  relicCountElement = getElementById('relicCount');
  lDPercentageElement = getElementById('LDPercentage');
  lDCloakedElement = getElementById('LDCloaked');
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
  hideElement(fetchStatsBtn);
  const hideRelicOffline = getValue('hideRelicOffline');
  if (relicData.is_owner && !hideRelicOffline) {
    getMembrList(true).then(missingMembers);
  }
  insertHtmlBeforeEnd(leftDiv, proc);
  processingStatus = getElementById('ProcessingStatus');
  const midDiv = createDiv({
    className: 'fshFloatLeft fshRelicMidDiv',
    innerHTML: defStats,
  });
  insertElement(containerDiv, midDiv);
  setDefVars();
  const rightDiv = createDiv({
    className: 'fshFloatLeft fshRelicRightDiv',
    innerHTML: atkStats,
  });
  insertElement(containerDiv, rightDiv);
  setAtkVars();
}
