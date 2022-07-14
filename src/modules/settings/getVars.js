import getCalfPrefs from '../common/getCalfPrefs';
import jsonStringify from '../common/jsonStringify';
import calf from '../support/calf';
import getValue from '../system/getValue';

function mapCalfPref(el) { calf[el[0]] = getValue(el[1]); }

function mappedVars() {
  [
    ['showHuntingBuffs', 'showHuntingBuffs'],
    ['buffs', 'huntingBuffs'],
    ['buffsName', 'huntingBuffsName'],
    ['buffs2', 'huntingBuffs2'],
    ['buffs2Name', 'huntingBuffs2Name'],
    ['buffs3', 'huntingBuffs3'],
    ['buffs3Name', 'huntingBuffs3Name'],
  ].forEach(mapCalfPref);
}

function simpleVars() {
  [
    'doNotKillList',
    'bountyListRefreshTime',
    'wantedNames',
    'combatEvaluatorBias',
    'enabledHuntingMode',
  ].forEach(getCalfPrefs);
}

export default function getVars() {
  mappedVars();
  simpleVars();
  calf.storage = ((jsonStringify(localStorage).length / (5 * 1024 * 1024))
    * 100).toFixed(2);
}
