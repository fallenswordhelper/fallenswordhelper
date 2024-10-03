import './newMap.css';
import executeAll from '../../common/executeAll';
import hideQTip from '../../common/hideQTip';
import buffInfo from './buffInfo/buffInfo';
import buttons from './buttons/buttons';
import champAttacks from './champAttacks';
import combatLogger from './combatLogger';
import interceptMouseEvents from './creatureInfo/interceptMouseEvents';
import doMonsterColors from './doMonsterColors';
import doNotKill from './doNotKill/doNotKill';
import fixRafInWorld from './fixRafInWorld';
import globalTop from './globalTop/globalTop';
import hideGroupButton from './hideGroupButton';
import hideTitanCombatResults from './hideTitanCombatResults';
import messageQueue from './messageQueue/messageQueue';
import monsterLog from './monsterLog/monsterLog';
import onWorld from './onWorld';
import relic from './relic/relic';
import repairButton from './repairButton';
import replaceFootprints from './replaceFootprints';
import sendGold from './sendGold';
import shop from './shop';
import teleport from './teleport/teleport';
import viewCreature from './viewCreature/viewCreature';
import worldPrefs from './worldPrefs/worldPrefs';

function msgCenterOffset() {
  $('#messageCenter').worldMessageCenter({ offset: '0 60' });
}

function hideMapTooltip() {
  hideQTip('#mapTooltip');
}

const usualRoutines = [
  fixRafInWorld,
  worldPrefs,
  sendGold,
  viewCreature,
  hideGroupButton,
  doMonsterColors,
  doNotKill,
  monsterLog,
  repairButton,
  combatLogger,
  onWorld,
  shop,
  relic,
  msgCenterOffset,
  hideMapTooltip,
  buttons,
  buffInfo,
  interceptMouseEvents,
  champAttacks,
  globalTop,
  teleport,
  messageQueue,
  replaceFootprints,
];

export default function newMap() {
  executeAll(usualRoutines);
  if (defineUserIsDev) {
    //  hide titan combat results, global top 100
    hideTitanCombatResults();
  }
}

// -1 = world page
// 0 = quest responce
// 1 = view creature
// 2 = attack creature
// 3 = attack player
// 4 = move
// 5 = use stair
// 6 = use chest
// 7 = take portal
// 9 = view relic
// 10 = empower relic
// 11 = take relic
// 12 = create group
// 13 = view shop
// 14 = purchase item
// 15 = repair
// 17 = login
// 18 = username not found
