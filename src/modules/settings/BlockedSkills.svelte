<script>
import arrayFrom from '../common/arrayFrom';
import getValue from '../system/getValue';
import setValue from '../system/setValue';

let blockedSkillLists = JSON.parse(getValue('blockedSkillLists'));
let listName = '-1';
let applied = false;

function getBlockedSkills() {
  const inputs = document.querySelectorAll('input[name="blockedSkillList[]"]');
  return arrayFrom(inputs).filter((i) => i.checked).map((i) => i.value);
}

/* eslint-disable no-param-reassign */
function applyBlockedSkillList() {
  const blockedSkillList = blockedSkillLists.find((i) => i.name === listName);
  if (blockedSkillList === undefined) { return; }
  const blockedSkills = blockedSkillList.skills;
  arrayFrom(document.querySelectorAll('input[name="blockedSkillList[]"]'))
    .forEach((i) => { i.checked = false; });
  blockedSkills.forEach((s) => {
    document.querySelector(`input[name="blockedSkillList[]"][value="${s}"]`).checked = true;
  });
  applied = true;
}
/* eslint-enable no-param-reassign */

/* eslint-disable no-alert */
function saveBlockedSkillList() {
  const skills = getBlockedSkills();
  if (listName === '-1') {
    const name = window.prompt('Name your new blocked skill set');
    if (name === undefined || name.trim().length === 0) { return; }
    blockedSkillLists = [...blockedSkillLists, {
      name: name.trim().substring(0, 50),
      skills,
    }];
    listName = name;
  } else {
    const index = blockedSkillLists.find((l) => l.name === listName);
    blockedSkillLists[index].skills = skills;
  }
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
}
/* eslint-enable no-alert */

/* eslint-disable no-alert */
function deleteBlockedSkillList() {
  if (listName === '-1') { return; }
  if (window.confirm('Are you sure you want to delete this set?')) {
    blockedSkillLists = blockedSkillLists.filter((l) => l.name !== listName);
    listName = '-1';
  }
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
}
/* eslint-enable no-alert */
</script>
<div style='text-align: center;'>
    <select id='fsh-skillSets' bind:value={listName}>
        <option value='-1'>New Block List</option>
        {#each blockedSkillLists as bsl}
        <option value={bsl.name}>{bsl.name}</option>
        {/each}
    </select>
    <input class='custominput' type='button' value='Use' on:click|self={applyBlockedSkillList} />
    <input class='custominput' type='button' value='Delete' on:click|self={deleteBlockedSkillList} />
    <input class='custominput' type='button' value='Save' on:click|self={saveBlockedSkillList} />
    {#if applied}
    <p style='padding-top: 12px;'>Make sure to click the 'Save Blocked Skill Changes' to apply your list.</p>
    {/if}
</div>
