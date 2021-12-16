import daUpdateBlockedSkills from '../../_dataAccess/daUpdateBlockedSkills';
import querySelector from '../../common/querySelector';
import querySelectorAll from '../../common/querySelectorAll';
import querySelectorArray from '../../common/querySelectorArray';

export function checkSkill(skillId) {
  querySelector(`input[name="blockedSkillList[]"][value="${skillId}"]`)
    .checked = true;
}

export function getCheckedSkills() {
  return querySelectorArray('input[name="blockedSkillList[]"]')
    .filter((i) => i.checked)
    .map((i) => i.value)
    .sort();
}

export function clearCheckedSkills() {
  querySelectorAll('input[name="blockedSkillList[]"]')
    // eslint-disable-next-line no-param-reassign
    .forEach((i) => { i.checked = false; });
}

export function submitSkillChanges() {
  const skills = getCheckedSkills();
  return daUpdateBlockedSkills(skills);
}

export function checkForDuplicates(blockedSkillLists, list) {
  return blockedSkillLists.filter((l) => l.name !== list.name)
    .filter((l) => l.skills.length === list.skills.length)
    .find((l) => l.skills.every((s, i) => s === list.skills[i]));
}

export function findList(blockedSkillLists, skills) {
  return checkForDuplicates(blockedSkillLists, { name: null, skills });
}
