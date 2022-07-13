/* eslint-disable no-param-reassign */
import './viewCreature.css';
import daGroupStats from '../../../_dataAccess/daGroupStats';
import daViewGroups from '../../../_dataAccess/daViewGroups';
import myStats from '../../../ajax/myStats';
import createDiv from '../../../common/cElement/createDiv';
import executeParam from '../../../common/executeParam';
import getElementById from '../../../common/getElementById';
import insertElement from '../../../common/insertElement';
import isArray from '../../../common/isArray';
import partial from '../../../common/partial';
import playerDataObject from '../../../common/playerDataObject';
import playerName from '../../../common/playerName';
import setInnerHtml from '../../../dom/setInnerHtml';
import calf from '../../../support/calf';
import { defViewCreature } from '../../../support/constants';
import evalAnalysis from './evalAnalysis';
import evalArmour from './evalArmour';
import evalAttack from './evalAttack';
import evalCA from './evalCa';
import evalDamage from './evalDamage';
import evalDefence from './evalDefence';
import evalExtraBuffs from './evalExtraBuffs';
import evalHTML from './evalHtml';
import makeDoNotKillLink from './makeDoNotKillLink';

let dialogViewCreature = 0;
let combatEvalContainer = 0;
let combatEvaluator = 0;
let groupEvaluator = 0;

function getDialogViewCreature() {
  if (!dialogViewCreature) {
    dialogViewCreature = getElementById('dialog-viewcreature');
  }
}

function getCombatEvalContainer() {
  if (!combatEvalContainer) {
    combatEvalContainer = createDiv();
    insertElement(dialogViewCreature, combatEvalContainer);
    insertElement(dialogViewCreature, createDiv({
      innerHTML: '<span class="fshFooter">'
        + '*Does include CA, DD, HF, DC, Flinch, Super Elite Slayer, NMV, '
        + 'Sanctuary, Constitution, Fortitude, Chi Strike and '
        + 'Terrorize (if active) and allow for randomness (1.1053). '
        + 'Constitution, NMV, Fortitude and Chi Strike apply to group '
        + 'stats.</span>',
    }));
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

function superElite(ses, obj, type) {
  // reduce stats if critter is a SE and player has SES cast on them.
  if (type === 3) {
    obj.attack -= Math.ceil(obj.attack * ses);
    obj.defense -= Math.ceil(obj.defense * ses);
    obj.armor -= Math.ceil(obj.armor * ses);
    obj.damage -= Math.ceil(obj.damage * ses);
    obj.hp -= Math.ceil(obj.hp * ses);
  }
}

function creatureData(creature, ses) {
  const obj = {
    name: creature.name,
    class: creature.creature_class,
    attack: Number(creature.attack),
    defense: Number(creature.defense),
    armor: Number(creature.armor),
    damage: Number(creature.damage),
    hp: Number(creature.hp),
  };
  superElite(ses, obj, creature.type);
  return obj;
}

function biasVars(combat) {
  combat.combatEvaluatorBias = calf.combatEvaluatorBias;
  combat.attackVariable = 1.1053;
  combat.generalVariable = calf.generalVariable;
  combat.hpVariable = calf.hpVariable;
}

function buffProcessing(combat) {
  executeParam(
    [
      evalExtraBuffs,
      evalAttack,
      evalDamage,
      evalDefence,
      evalArmour,
      evalAnalysis,
      evalCA,
    ],
    combat,
  );
}

function doCombatEval(data, playerJson, groupData) {
  const combat = {};
  combat.callback = groupData;
  // playerdata
  combat.player = playerDataObject(playerJson);
  biasVars(combat);
  combat.creature = creatureData(data.response.data, combat.player.superEliteSlayerMultiplier);
  buffProcessing(combat);
  combat.evaluatorHTML = evalHTML(combat);
  if (groupData.groupExists) {
    setGroupEvalalutor(combat.evaluatorHTML);
  } else {
    setCombatEvaluator(combat.evaluatorHTML);
  }
}

function myGroup(el) {
  return el.members[0].name === playerName();
}

function getGroupId(json) {
  if (isArray(json.r)) {
    return json.r.find(myGroup).id;
  }
}

function processGroupStats(data, playerJson, groupJson) {
  if (!groupJson.r || !groupJson.r.attributes) { return; }
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

function getGroupStats(data, playerJson, groupId) {
  if (groupId) {
    daGroupStats(groupId).then(partial(processGroupStats, data, playerJson));
  }
}

function processGroup(data, playerJson) {
  daViewGroups().then(getGroupId)
    .then(partial(getGroupStats, data, playerJson));
}

function processPlayer(data, playerJson) {
  if (data.player.hasGroup) { processGroup(data, playerJson); }
  doCombatEval(data, playerJson, { groupExists: false });
}

function isValidData(data) {
  return data.response && data.response.data;
}

function processCreature(_e, data) {
  getDialogViewCreature();
  if (!dialogViewCreature) { return; }
  setCombatEvaluator('');
  setGroupEvalalutor('');
  if (isValidData(data)) {
    makeDoNotKillLink(data.response.data.name, dialogViewCreature);
    myStats(true).then(partial(processPlayer, data));
  }
}

export default function viewCreature() {
  $.subscribe(defViewCreature, processCreature);
}
