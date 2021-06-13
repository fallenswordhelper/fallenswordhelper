import './newMap.css';
import { buffInfo } from './buffInfo/buffInfo';
import champAttacks from './champAttacks';
import combatLogger from './combatLogger';
import createStyle from '../../common/cElement/createStyle';
import doNotKill from './doNotKill/doNotKill';
import executeAll from '../../common/executeAll';
import getElementById from '../../common/getElement';
import getValue from '../../system/getValue';
import globalTop from './globalTop';
import hideQTip from '../../common/hideQTip';
import hideTitanCombatResults from './hideTitanCombatResults';
import initButtons from './buttons/buttons';
import injectRelic from './relic/relic';
import injectSendGoldOnWorld from './sendGold';
import insertElement from '../../common/insertElement';
import interceptMouseEvents from './creatureInfo/interceptMouseEvents';
import onWorld from './onWorld';
import onclick from '../../common/onclick';
import partial from '../../common/partial';
import prepareShop from './shop';
import startMonsterLog from './monsterLog/monsterLog';
import viewCreature from './viewCreature/viewCreature';
import worldPrefs from './worldPrefs/worldPrefs';
import {
  defAfterUpdateActionlist,
  defControlsKeydown,
  defFetchPlayerBackpackCount,
  defFetchPlayerBuffs,
  defFetchWorldRealmActions,
  defFetchWorldRealmDynamic,
} from '../../support/constants';

function hideGroupByType(type) { // jQuery
  $(`#actionList li.creature-${type.toString()} a.create-group`).hide();
}

function hideGroupSubscribe(type) { // jQuery.min
  $.subscribe(defAfterUpdateActionlist, partial(hideGroupByType, type));
}

const hideGroupTypes = [
  'hideChampionsGroup',
  'hideElitesGroup',
  'hideSEGroup',
  'hideTitanGroup',
  'hideLegendaryGroup',
];

function groupType(el, i) {
  if (getValue(el)) {
    hideGroupSubscribe(i + 1);
    hideGroupByType(i + 1);
  }
}

function hideGroupButton() {
  hideGroupTypes.forEach(groupType);
}

function injectMonsterStyle() {
  insertElement(document.body, createStyle(
    '#actionList .creature-1 {color: green;}\n'
    + '#actionList .creature-2 {color: yellow;}\n'
    + '#actionList .creature-3 {color: red;}',
  ));
}

function doMonsterColors() {
  if (getValue('enableCreatureColoring')) { injectMonsterStyle(); }
}

function doRepair(e, key) {
  if (key === 'ACT_REPAIR') {
    GameData.fetch(
      defFetchPlayerBackpackCount
      + defFetchPlayerBuffs
      + defFetchWorldRealmDynamic
      + defFetchWorldRealmActions,
    );
  }
}

function repairButton() {
  $.subscribe(defControlsKeydown, doRepair);
}

function msgCenterOffset() {
  $('#messageCenter').worldMessageCenter({ offset: '0 60' });
}

function hideMapTooltip() {
  hideQTip('#mapTooltip');
}

function fixDebuffQTip(e) {
  hideQTip(e.target);
}

function fixDebuff() {
  onclick(getElementById('buffList'), fixDebuffQTip);
}

const usualRoutines = [
  worldPrefs,
  injectSendGoldOnWorld,
  viewCreature,
  hideGroupButton,
  doMonsterColors,
  doNotKill,
  startMonsterLog,
  repairButton,
  combatLogger,
  onWorld,
  prepareShop,
  injectRelic,
  msgCenterOffset,
  hideMapTooltip,
  initButtons,
  buffInfo,
  fixDebuff,
  interceptMouseEvents,
  champAttacks,
];

export default function subscribes() {
  executeAll(usualRoutines);
  // eslint-disable-next-line no-unused-labels, no-labels
  devLbl: { //  hide titan combat results, global top 100
    hideTitanCombatResults();
    globalTop();
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
