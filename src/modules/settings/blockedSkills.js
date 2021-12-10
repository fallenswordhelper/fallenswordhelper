import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';

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
  const inputs = querySelectorAll('input[name="blockedSkillList[]"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

export function submitSkillChanges() {
  querySelector('input[value="Save Blocked Skill Changes"]').click();
}
