import daGroupStats from '../../../_dataAccess/daGroupStats';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import myStats from '../../../ajax/myStats';
import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import isArray from '../../../common/isArray';
import playerName from '../../../common/playerName';
import { defViewCreature } from '../../../support/constants';
import makeDoNotKillLink from './makeDoNotKillLink';
import CombatEval from './CombatEval.svelte';
import calcStats from './calcStats';
import { mount } from 'svelte';
import calcBuffBonuses from './buffs/calcBuffBonuses';

let dialogViewCreature = 0;
let combatEvalContainer = 0;
let combatEvaluator = 0;
let combatEvaluatorApp = 0;
let combatEvaluatorContainer = 0;
let groupCombatEvaluatorApp = 0;
let groupCombatEvaluatorContainer = 0;

function getCombatEvaluatorContainer() {
  if (!combatEvaluatorContainer) combatEvaluatorContainer = createDiv();
  return combatEvaluatorContainer;
}

function getGroupCombatEvaluatorContainer() {
  if (!groupCombatEvaluatorContainer) groupCombatEvaluatorContainer = createDiv();
  return groupCombatEvaluatorContainer;
}

function getDialogViewCreature() {
  if (!dialogViewCreature) {
    dialogViewCreature = getElementById('dialog-viewcreature');
  }
}

function getCombatEvalContainer() {
  if (!combatEvalContainer) {
    combatEvalContainer = createDiv();
    insertElement(dialogViewCreature, combatEvalContainer);
    insertElement(
      dialogViewCreature,
      createDiv(),
    );
  }
}

function getCombatEvaluator() {
  if (!combatEvaluator) {
    getCombatEvalContainer();
    combatEvaluator = createDiv();
    insertElement(combatEvalContainer, combatEvaluator);
  }
  return combatEvaluator;
}

function showPlayerCombatEval(data, player) {
  const enemy = data.response.data;
  const buffs = calcBuffBonuses(player, enemy);
  const bonuses = calcStats(player, enemy, buffs);

  if(!combatEvaluatorApp) {
    combatEvaluatorApp = mount(
      CombatEval,
      {
        target: getCombatEvaluatorContainer(),
        props: { title: 'One-On-One Combat Evaluation', player, enemy, buffs },
      },
    );
  }
  else {
    combatEvaluatorApp.update(player, enemy, buffs, bonuses);
  }
  getCombatEvaluator().append(getCombatEvaluatorContainer());
}

function showGroupCombatEval(data, group) {
  const enemy = data.response.data;
  const buffs = calcBuffBonuses(group, enemy);
  const bonuses = calcStats(group, enemy, buffs);
  if (!groupCombatEvaluatorApp) {
    groupCombatEvaluatorApp = mount(
      CombatEval,
      {
        target: getGroupCombatEvaluatorContainer(),
        props: { title: 'Group Combat Evaluation', player: group, enemy, buffs },
      },
    );
  }
  else {
    groupCombatEvaluatorApp.update(group, enemy, buffs, bonuses);
  } 
  getCombatEvaluator().append(getGroupCombatEvaluatorContainer());
}

function myGroup(el) {
  return el.members[0].name === playerName();
}

function getGroupId(json) {
  if (isArray(json.r)) {
    return json.r.find(myGroup)?.id;
  }
}

function processGroupStats(data, playerJson, groupJson) {
  if (!groupJson.r?.attributes) {
    return;
  }
  const attr = groupJson.r.attributes;
  return {
    groupExists: true,
    attack: attr[0].value,
    defense: attr[1].value,
    armor: attr[2].value,
    damage: attr[3].value,
    hp: attr[4].value,
    _skills: playerJson._skills,
  };
}

async function getGroupStats(data, playerJson, groupId) {
  if (groupId) {
    const groupJson = await daGroupStats(groupId);
    return processGroupStats(data, playerJson, groupJson);
  }
  return { groupExists: false };
}

async function processGroup(data, playerJson) {
  if(data.player.hasGroup) {
    const json = await daViewGroups();
    const groupId = getGroupId(json);
    return getGroupStats(data, playerJson, groupId);
  }
}

async function processCreature(_e, data) {
  if (!combatEvaluatorContainer) combatEvaluatorContainer = createDiv();
  getDialogViewCreature();
  if (!dialogViewCreature) {
    return;
  }
  if (data?.response?.data) {
    makeDoNotKillLink(data.response.data.name, dialogViewCreature);
    const player = await myStats(true);
    showPlayerCombatEval(data, player);
    if (data.player.hasGroup) {
      const group = await processGroup(data, player);
      showGroupCombatEval(data, group);
    }
  }
}

export default function viewCreature() {
  $.subscribe(defViewCreature, processCreature);
}
