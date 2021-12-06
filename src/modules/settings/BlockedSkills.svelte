<script>
import arrayFrom from '../common/arrayFrom';
import getValue from '../system/getValue';
import setValue from '../system/setValue';

let blockedSkillLists = JSON.parse(getValue('blockedSkillLists'));
let listName = '-1';
let applied = false;
let error = false;

function getBlockedSkills() {
  const inputs = document.querySelectorAll('input[name="blockedSkillList[]"]');
  return arrayFrom(inputs).filter((i) => i.checked).map((i) => i.value);
}

/* eslint-disable no-param-reassign */
function applyBlockedSkillList() {
  const blockedSkillList = blockedSkillLists.find((i) => i.name === listName);
  if (blockedSkillList === undefined) {
    error = 'Unable to find this list. Try refreshing the page.';
    return;
  }
  const blockedSkills = blockedSkillList.skills;
  arrayFrom(document.querySelectorAll('input[name="blockedSkillList[]"]'))
    .forEach((i) => { i.checked = false; });
  blockedSkills.forEach((s) => {
    document.querySelector(`input[name="blockedSkillList[]"][value="${s}"]`).checked = true;
  });
  applied = true;
  error = false;
}
/* eslint-enable no-param-reassign */

/* eslint-disable no-alert */
function saveBlockedSkillList() {
  const skills = getBlockedSkills();
  if (listName === '-1') {
    const rawName = window.prompt('Name your new blocked skill set');
    if (rawName === undefined) { return; }
    const name = rawName.trim();
    if (name.length === 0 || name.length > 50) {
      error = 'Blocked skill set names must be between 1 and 50 characters.';
      return;
    }
    if (blockedSkillLists.find((i) => i.name === name) !== undefined) {
      error = `You already have a blocked skill list named ${name}`;
      return;
    }
    error = false;
    blockedSkillLists = [...blockedSkillLists, {
      name,
      skills,
    }];
    listName = name;
  } else {
    const index = blockedSkillLists.find((l) => l.name === listName);
    if (index === undefined) {
      error = 'Unable to find this list. Try refreshing the page.';
      return;
    }
    blockedSkillLists[index].skills = skills;
  }
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
  if (blockedSkillLists.length >= 10) {
    error = 'Having more than 10 blocked skill sets may slow down this page.';
  } else {
    error = false;
  }
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
  error = false;
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
    {#if error !== false}
    <div style="border: 2px solid rgb(255, 255, 255); margin: 10px auto; width: 80%; background: rgb(211, 207, 193);">
      <div style="background: rgb(142, 134, 104); color: rgb(255, 255, 255); font-size: smaller;">INFORMATION</div>
      <div>{error}</div>
    </div>
    {/if}
</div>
