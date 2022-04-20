import daSkills from '../../_dataAccess/daSkills';
import partial from '../../common/partial';
import querySelector from '../../common/querySelector';
import querySelectorAll from '../../common/querySelectorAll';
import querySelectorArray from '../../common/querySelectorArray';
import { blockedSkillsCheckboxes, levelDefaults } from '../../support/constants';

export function checkSkill(skillId) {
  querySelector(`${blockedSkillsCheckboxes}[value="${skillId}"]`)
    .checked = true;
}

export function getCheckedSkills() {
  return querySelectorArray(blockedSkillsCheckboxes)
    .filter((i) => i.checked)
    .map((i) => i.value)
    .sort();
}

export function clearCheckedSkills() {
  querySelectorAll(blockedSkillsCheckboxes)
    // eslint-disable-next-line no-param-reassign
    .forEach((i) => { i.checked = false; });
}

function updateLevelDefaults(level, [index, inputName]) {
  // eslint-disable-next-line no-param-reassign
  level[index] = Number(querySelector(`input[name="${inputName}"]`).value);
}

export function submitSkillChanges() {
  const checkboxes = querySelectorAll(blockedSkillsCheckboxes);
  const level = [];
  const blocked = [];
  for (const i of checkboxes) {
    level[i.value] = 0;
    blocked[i.value] = i.checked ? 1 : 0;
  }
  levelDefaults.forEach(partial(updateLevelDefaults, level));
  return daSkills(level, blocked);
}

export function checkForDuplicates(blockedSkillLists, list) {
  return blockedSkillLists.filter((l) => l.name !== list.name)
    .filter((l) => l.skills.length === list.skills.length)
    .find((l) => l.skills.every((s, i) => s === list.skills[i]));
}

export function findList(blockedSkillLists, skills) {
  return checkForDuplicates(blockedSkillLists, { name: null, skills });
}
