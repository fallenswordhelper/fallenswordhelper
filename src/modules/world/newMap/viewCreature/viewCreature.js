import './viewCreature.css';
import daGroupStats from '../../../_dataAccess/daGroupStats';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import myStats from '../../../ajax/myStats';
import createDiv from '../../../common/cElement/createDiv';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import isArray from '../../../common/isArray';
import playerName from '../../../common/playerName';
import setInnerHtml from '../../../dom/setInnerHtml';
import { defViewCreature } from '../../../support/constants';
import makeDoNotKillLink from './makeDoNotKillLink';
import CombatEval from './CombatEval.svelte';
import calcStats from './calcStats';
import { mount } from 'svelte';
import calcBuffBonuses from './buffs/calcBuffBonuses';

let dialogViewCreature = 0;
let combatEvalContainer = 0;
let combatEvaluator = 0;
let groupEvaluator = 0;
let combatEvaluatorApp = 0;
let combatEvaluatorContainer = 0;

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
}

function getGroupEvaluator() {
  if (!groupEvaluator) {
    getCombatEvaluator();
    groupEvaluator = createDiv();
    insertElement(combatEvalContainer, groupEvaluator);
  }
}

function setCombatEvaluator(html) {
  getCombatEvaluator();
  setInnerHtml(html, combatEvaluator);
}

function setGroupEvalalutor(html) {
  getGroupEvaluator();
  setInnerHtml(html, groupEvaluator);
}

function doCombatEval(data, playerJson, groupData) {
  const enemy = data.response.data;
  const player = playerJson;
  const buffs = calcBuffBonuses(player, enemy);
  const bonuses = calcStats(player, enemy, buffs);

  if(!combatEvaluatorApp) {
    combatEvaluatorApp = mount(CombatEval, { target: combatEvaluatorContainer, props: {player, enemy, buffs, bonuses} });
  }
  else {
    combatEvaluatorApp.update(player, enemy, buffs, bonuses);
  }
  combatEvaluator.append(combatEvaluatorContainer);
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
  doCombatEval(data, playerJson, {
    groupExists: true,
    groupAttackValue: attr[0].value,
    groupDefenseValue: attr[1].value,
    groupArmorValue: attr[2].value,
    groupDamageValue: attr[3].value,
    groupHPValue: attr[4].value,
  });
}

async function getGroupStats(data, playerJson, groupId) {
  if (groupId) {
    const groupJson = await daGroupStats(groupId);
    processGroupStats(data, playerJson, groupJson);
  }
}

async function processGroup(data, playerJson) {
  const json = await daViewGroups();
  const groupId = getGroupId(json);
  getGroupStats(data, playerJson, groupId);
}

function processPlayer(data, playerJson) {
  if (data.player.hasGroup) {
    processGroup(data, playerJson);
  }
  doCombatEval(data, playerJson, { groupExists: false });
}

async function processCreature(_e, data) {
  if (!combatEvaluatorContainer) combatEvaluatorContainer = createDiv();
  getDialogViewCreature();
  if (!dialogViewCreature) {
    return;
  }
  setCombatEvaluator('');
  setGroupEvalalutor('');
  if (data?.response?.data) {
    makeDoNotKillLink(data.response.data.name, dialogViewCreature);
    const json = await myStats(true);
    if (json?._skills) processPlayer(data, json);
  }
}

export default function viewCreature() {
  $.subscribe(defViewCreature, processCreature);
}
