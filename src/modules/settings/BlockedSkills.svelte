<script>
import getValueJSON from '../system/getValueJSON';
import isUndefined from '../common/isUndefined';
import querySelector from '../common/querySelector';
import querySelectorAll from '../common/querySelectorAll';
import querySelectorArray from '../common/querySelectorArray';
import setValue from '../system/setValue';

let blockedSkillLists = getValueJSON('blockedSkillLists');
let newListName = '';
let error = false;
let listName = '';

function apply() {
  querySelector('input[value="Save Blocked Skill Changes"]').click();
}

function clearMessages() {
  error = false;
}

function storeBlockedSkillsLists() {
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
}

function getCheckedSkills() {
  return querySelectorArray('input[name="blockedSkillList[]"]', document)
    .filter((i) => i.checked)
    .map((i) => i.value);
}

function clearCheckedSkills() {
  const inputs = querySelectorAll('input[name="blockedSkillList[]"]');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }
}

function applyList() {
  clearMessages();

  if (!listName) {
    return;
  }

  const skillList = blockedSkillLists.find((l) => l.name === listName);
  if (!skillList) {
    error = `Unable to find list "${listName}". Try refreshing the page.`;
    return;
  }

  clearCheckedSkills();
  skillList.skills.forEach((skill) => {
    querySelector(`input[name="blockedSkillList[]"][value="${skill}"]`)
      .checked = true;
  });
  apply();
}

function checkForDuplicates(list) {
  return blockedSkillLists.some((l) => {
    if (l.name === list.name) {
      return false;
    }
    if (l.skills.length !== list.skills.length) {
      return false;
    }
    for (let i = 0; i < l.skills.length; i++) {
      if (l.skills[i] !== list.skills[i]) {
        return false;
      }
    }
    return true;
  });
}

function deleteList() {
  clearMessages();
  blockedSkillLists = blockedSkillLists.filter((l) => l.name !== listName);
  storeBlockedSkillsLists();
  listName = '-1';
}

function createList() {
  clearMessages();

  const cleanListName = newListName.trim();
  if (!cleanListName.length) {
    error = 'You must name your list.';
    return;
  }
  if (cleanListName.length > 50) {
    error = 'List names can only be at most 50 characters long.';
    return;
  }
  if (blockedSkillLists.some((l) => l.name === cleanListName)) {
    error = `You already have a list named ${cleanListName}.`;
    return;
  }

  const newList = {
    name: cleanListName,
    skills: getCheckedSkills(),
  };

  if (checkForDuplicates(newList)) {
    error = 'You already have a list with these skills.';
    return;
  }

  blockedSkillLists = [...blockedSkillLists, newList];
  listName = newList.name;
  newListName = '';
  storeBlockedSkillsLists();

  apply();
}

function updateList() {
  clearMessages();
  const index = blockedSkillLists.findIndex((l) => l.name === listName);
  if (isUndefined(index)) {
    error = `Cannot find list named "${listName}". Try refreshing the page.`;
    return;
  }

  const skills = getCheckedSkills();
  const skillList = { name: listName, skills };

  if (checkForDuplicates(skillList)) {
    error = 'You already have a list with these skills.';
    return;
  }

  blockedSkillLists[index] = skillList;
  storeBlockedSkillsLists();
  apply();
}

function findLoadList() {
  const skills = getCheckedSkills();
  const list = blockedSkillLists.find((l) => {
    if (l.skills.length !== skills.length) {
      return false;
    }
    for (let i = 0; i < l.skills.length; i++) {
      if (l.skills[i] !== skills[i]) {
        return false;
      }
    }
    return true;
  });
  if (list) {
    listName = list.name;
  }

  if (blockedSkillLists.length >= 10) {
    error = 'Having more than 10 blocked skills lists may slow down this page.';
  }
}

findLoadList();
</script>
<div class='fshCenter' style='argin-top: 12px'>
  <div>
    <select id='fsh-skillSets' bind:value={listName}>
        {#each blockedSkillLists as bsl (bsl.name)}
        <option value={bsl.name}>{bsl.name}</option>
        {/each}
    </select>
    <input class='custominput'
      type='button'
      value='Use'
      on:click|self={applyList} />
    <input class='custominput'
      type='button'
      value='Delete'
      on:click|self={deleteList} />
    <input
      class='custominput'
      type='button'
      value='Update'
      on:click|self={updateList} />
  </div>
  <div style="margin-top: 6px">
    <input
      class='custominput'
      type='text'
      name='new-set-name'
      id='new-set-name'
      placeholder='Set Name'
      maxlength='50'
      bind:value={newListName} />
    <input
      class='custominput'
      type='button'
      value='Save New Blocked Skill Set'
      on:click|self={createList}/>
  </div>
  {#if error}
  <div class="infobox">
    <div class="infobox-header">INFORMATION</div>
      <div>{error}</div>
    </div>
  {/if}
</div>
