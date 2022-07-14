import calf from '../../../support/calf';
import getValue from '../../../system/getValue';
import shouldBeArray from '../../../system/shouldBeArray';
import { prepareHidePlayerActions } from '../prepareHidePlayerActions';
import buildFshDivs from './buildFshDivs';
import getCombatBias from './getCombatBias';
import doHuntingBuffs from './huntingBuffs/doHuntingBuffs';
import interceptXHR from './interceptXHR';

function mappedArray(a) { calf[a[0]] = shouldBeArray(a[1]); }

function mappedArrays() {
  [
    ['buffs', 'huntingBuffs'],
    ['buffs2', 'huntingBuffs2'],
    ['buffs3', 'huntingBuffs3'],
  ].forEach(mappedArray);
}

function straightArray(a) { calf[a] = shouldBeArray(a); }

function straightArrays() {
  [
    'doNotKillList',
  ].forEach(straightArray);
}

function arrayType() {
  mappedArrays();
  straightArrays();
}

function mappedValue(a) { calf[a[0]] = getValue(a[1]); }

function mappedValues() {
  [
    ['buffsName', 'huntingBuffsName'],
    ['buffs2Name', 'huntingBuffs2Name'],
    ['buffs3Name', 'huntingBuffs3Name'],
    ['showHuntingBuffs', 'showHuntingBuffs'],
  ].forEach(mappedValue);
}

function straightValue(a) { calf[a] = getValue(a); }

function straightValues() {
  [
    'enabledHuntingMode',
    'hideSubLvlCreature',
    'showTitanInfo',
    'showBuffInfo',
    'showMonsterLog',
    'showCreatureInfo',
  ].forEach(straightValue);
}

function valueType() {
  mappedValues();
  straightValues();
}

function getPrefs() {
  arrayType();
  valueType();
}

export default function worldPrefs() {
  getCombatBias();
  getPrefs();
  const missingBuffsDiv = buildFshDivs();
  interceptXHR();
  doHuntingBuffs(missingBuffsDiv);
  prepareHidePlayerActions();
}
