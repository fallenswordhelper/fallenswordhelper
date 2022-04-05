import './newMap.css';
import { buffInfo } from './buffInfo/buffInfo';
import buttons from './buttons/buttons';
import calf from '../../support/calf';
import champAttacks from './champAttacks';
import combatLogger from './combatLogger';
import doMonsterColors from './doMonsterColors';
import doNotKill from './doNotKill/doNotKill';
import executeAll from '../../common/executeAll';
import fixDebuff from './fixDebuff';
import globalTop from './globalTop/globalTop';
import hideGroupButton from './hideGroupButton';
import hideQTip from '../../common/hideQTip';
import hideTitanCombatResults from './hideTitanCombatResults';
import injectRelic from './relic/relic';
import interceptMouseEvents from './creatureInfo/interceptMouseEvents';
import interceptNotifications from './interceptNotifications';
import monsterLog from './monsterLog/monsterLog';
import onWorld from './onWorld';
import repairButton from './repairButton';
import sendGold from './sendGold';
import shop from './shop';
import viewCreature from './viewCreature/viewCreature';
import worldPrefs from './worldPrefs/worldPrefs';

function msgCenterOffset() {
  $('#messageCenter').worldMessageCenter({ offset: '0 60' });
}

function hideMapTooltip() {
  hideQTip('#mapTooltip');
}

const usualRoutines = [
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
  injectRelic,
  msgCenterOffset,
  hideMapTooltip,
  buttons,
  buffInfo,
  fixDebuff,
  interceptMouseEvents,
  champAttacks,
  globalTop,
  interceptNotifications,
];

export default function newMap() {
  executeAll(usualRoutines);
  if (calf.userIsDev) { //  hide titan combat results, global top 100
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
