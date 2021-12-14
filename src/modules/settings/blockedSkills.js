import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import skill from '../app/settings/skill';

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
  const checkboxes = querySelectorAll('input[name="blockedSkillList[]"]');
  const level = [];
  const blocked = [];
  for (const i of checkboxes) {
    level[i.value] = 0;
    blocked[i.value] = i.checked ? 1 : 0;
  }
  level[54] = Number(querySelector('input[name="ca_default"]').value);
  level[101] = Number(querySelector('input[name="sc_default"]').value);
  level[60] = Number(querySelector('input[name="nv_default"]').value);
  level[98] = Number(querySelector('input[name="barricade_default"]').value);
  skill(level, blocked);
}
