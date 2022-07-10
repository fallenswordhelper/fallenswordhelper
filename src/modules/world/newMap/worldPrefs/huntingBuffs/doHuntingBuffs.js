import partial from '../../../../common/partial';
import trim from '../../../../common/trim';
import setInnerHtml from '../../../../dom/setInnerHtml';
import calf from '../../../../support/calf';
import { defPlayerBuffs } from '../../../../support/constants';
import { getHuntingBuffs, getHuntingBuffsName, setCurrentBuffList } from './setCurrentBuffList';

function buildBuffHash(acc, curr) {
  acc[curr.name] = true;
  return acc;
}

function findMissingBuffs(buffHash, acc, curr) {
  if (!buffHash[trim(curr)]) { acc.push(curr); }
  return acc;
}

function displayMissingBuffs(missingBuffsDiv, missingBuffs) {
  setInnerHtml(`You are missing some ${getHuntingBuffsName()} hunting buffs<br>(${
    missingBuffs.join(', ')})`, missingBuffsDiv);
}

function clearBuffDiv(missingBuffsDiv) {
  setInnerHtml('', missingBuffsDiv);
}

function lookForMissingBuffs(missingBuffsDiv, data) {
  const buffHash = data.b.reduce(buildBuffHash, {});
  const missingBuffs = getHuntingBuffs().reduce(partial(findMissingBuffs, buffHash), []);
  if (missingBuffs.length > 0) {
    displayMissingBuffs(missingBuffsDiv, missingBuffs);
  } else {
    clearBuffDiv(missingBuffsDiv);
  }
}

function huntingBuffsEnabled(missingBuffsDiv, data) {
  if (calf.showBuffs) {
    lookForMissingBuffs(missingBuffsDiv, data);
  } else {
    clearBuffDiv(missingBuffsDiv);
  }
}

function dataEventsPlayerBuffs(missingBuffsDiv, _evt, data) {
  if (getHuntingBuffs()) { huntingBuffsEnabled(missingBuffsDiv, data); }
}

export default function doHuntingBuffs(missingBuffsDiv) { // jQuery.min
  setCurrentBuffList();
  const buffsFn = partial(dataEventsPlayerBuffs, missingBuffsDiv);
  $.subscribe(defPlayerBuffs, buffsFn);
  if (calf.showBuffs && window.initialGameData) { // HCS initial data
    buffsFn(null, { b: window.initialGameData.player.buffs });
  }
}
