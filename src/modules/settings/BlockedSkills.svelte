<script>
import getValueJSON from '../system/getValueJSON';
import setValue from '../system/setValue';
import {
  checkSkill,
  clearCheckedSkills,
  getCheckedSkills,
  submitSkillChanges,
} from './blockedSkills';

let blockedSkillLists = getValueJSON('blockedSkillLists');
let newListName = '';
let error = false;
let listName = '';

function checkForDuplicates(list) {
  return blockedSkillLists.some((l) => {
    if (l.name === list.name) {
      return false;
    }
    if (l.skills.length !== list.skills.length) {
      return false;
    }
    return l.skills.every((s, i) => s === list.skills[i]);
  });
}

const loadListChecks = [
  [
    (list) => !list,
    (list) => `Unable to find list "${list.name}". Try refreshing the page.`,
  ],
];

const updateListChecks = [
  [
    (list) => !blockedSkillLists.some((l) => l.name === list.name),
    (list) => `Cannot find list named "${list.name}". Try refreshing the page.`,
  ],
  [
    (list) => checkForDuplicates(list),
    () => 'You already have a list with these skills.',
  ],
];

const newListChecks = [
  [
    (list) => !list.name.length,
    () => 'You must name your list.',
  ],
  [
    (list) => list.name.length > 50,
    () => 'List names can only be at most 50 characters long.',
  ],
  [
    (list) => blockedSkillLists.some((l) => l.name === list.name),
    (list) => `You already have a list named ${list.name}.`,
  ],
  [
    (list) => checkForDuplicates(list),
    () => 'You already have a list with these skills.',
  ],
];

function checkForErrors(checks, ...args) {
  const errPair = checks.find(([test]) => test(...args));
  if (errPair) {
    error = errPair[1](...args);
    return true;
  }
  return false;
}

function clearMessages() {
  error = false;
}

function storeBlockedSkillsLists() {
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
}

function applyList() {
  clearMessages();

  if (!listName) {
    return;
  }

  const skillList = blockedSkillLists.find((l) => l.name === listName);

  if (checkForErrors(loadListChecks, skillList)) {
    return;
  }

  clearCheckedSkills();
  skillList.skills.forEach(checkSkill);
  submitSkillChanges();
}

function deleteList() {
  clearMessages();
  blockedSkillLists = blockedSkillLists.filter((l) => l.name !== listName);
  storeBlockedSkillsLists();
  listName = '';
}

function createList() {
  clearMessages();

  const cleanListName = newListName.trim();
  const newList = {
    name: cleanListName,
    skills: getCheckedSkills(),
  };

  if (checkForErrors(newListChecks, newList)) {
    return;
  }
  blockedSkillLists = [...blockedSkillLists, newList];
  listName = newList.name;
  newListName = '';
  storeBlockedSkillsLists();

  submitSkillChanges();
}

function updateList() {
  clearMessages();
  if (!listName) {
    return;
  }

  const skillList = {
    name: listName,
    skills: getCheckedSkills(),
  };

  if (checkForErrors(updateListChecks, skillList)) {
    return;
  }

  const index = blockedSkillLists.findIndex((l) => l.name === listName);
  blockedSkillLists[index] = skillList;
  storeBlockedSkillsLists();
  submitSkillChanges();
}

function findLoadList() {
  const skills = getCheckedSkills();
  const list = blockedSkillLists.find((l) => {
    if (l.skills.length !== skills.length) {
      return false;
    }
    return l.skills.every((s, i) => s === skills[i]);
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
<div class='fshCenter'>
  <span class='fshBold'>Saved Blocked Skill Sets</span><br/>
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
  <div id="newlists">
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
<style>
.infobox {
  background: #D3CFC1;
  border: 2px solid white;
  margin: 10px auto;
  width: 80%;
}

.infobox .infobox-header {
  background: #8E8668;
  color: white;
  font-size: smaller;
}

#newlists { margin-top: 4px; }
</style>
