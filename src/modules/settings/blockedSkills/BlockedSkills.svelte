<script>
import getValueJSON from '../../system/getValueJSON';
import setValueJSON from '../../system/setValueJSON';
import {
  checkSkill,
  clearCheckedSkills,
  findList,
  getCheckedSkills,
  submitSkillChanges,
} from './blockedSkills';
import {
  checkLoadList,
  checkNewList,
  checkUpdateList,
} from './errorChecks';

let blockedSkillLists = getValueJSON('blockedSkillLists');
let newListName = '';
let listName = '';
let infoBoxHeader = '';
let infoBoxText = '';

function clearMessages() {
  infoBoxText = '';
}

function infoBox(msg, header = 'INFORMATION') {
  if (msg) {
    infoBoxHeader = header;
    infoBoxText = msg;
    return true;
  }
}

async function submitChanges() {
  infoBox('Applying changes...');
  const response = await submitSkillChanges();
  if (response.s) {
    infoBox('Blocked Skill settings updated!');
  } else {
    infoBox(response.e, 'ERROR');
  }
}

function storeBlockedSkillsLists() {
  infoBox('Applying list...');
  setValueJSON('blockedSkillLists', blockedSkillLists);
}

function applyList() {
  clearMessages();

  if (!listName) {
    return;
  }

  const skillList = blockedSkillLists.find((l) => l.name === listName);

  if (infoBox(checkLoadList(blockedSkillLists, skillList), 'ERROR')) {
    return;
  }

  clearCheckedSkills();
  skillList.skills.forEach(checkSkill);
  submitChanges();
}

function deleteList() {
  clearMessages();
  blockedSkillLists = blockedSkillLists.filter((l) => l.name !== listName);
  storeBlockedSkillsLists();
  listName = '';
  infoBox('Blocked skill list deleted');
}

function createList() {
  clearMessages();

  const newList = {
    name: newListName.trim(),
    skills: getCheckedSkills(),
  };

  if (infoBox(checkNewList(blockedSkillLists, newList), 'ERROR')) {
    return;
  }

  blockedSkillLists = [...blockedSkillLists, newList];
  listName = newList.name;
  newListName = '';
  storeBlockedSkillsLists();

  submitChanges();
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

  if (infoBox(checkUpdateList(blockedSkillLists, skillList), 'ERROR')) {
    return;
  }

  const index = blockedSkillLists.findIndex((l) => l.name === listName);
  blockedSkillLists[index] = skillList;
  storeBlockedSkillsLists();
  submitChanges();
}

const list = findList(blockedSkillLists, getCheckedSkills());
if (list) {
  listName = list.name;
}

if (blockedSkillLists.length >= 10) {
  infoBox('Having more than 10 blocked skills lists may slow down this page.');
}
</script>

<div class='fshCenter'>
  <span class='fshBold'>Saved Blocked Skill Sets</span><br/>
  <div>
    <select id='fsh-skillSets' bind:value={listName}>
      {#each blockedSkillLists as bsl (bsl.name)}
        <option value={bsl.name}>{bsl.name}</option>
      {/each}
    </select>
    <input
      class='custominput'
      type='button'
      value='Use'
      on:click|self={applyList} />
    <input
      class='custominput'
      type='button'
      value='Delete'
      on:click|self={deleteList} />
    <input
      class='custominput'
      type='button'
      value='Update'
      on:click|self={updateList} />
  </div>
  <div class="newlists">
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
      on:click|self={createList} />
  </div>
  {#if infoBoxText}
    <div class="infobox">
      <div class="infobox-header">{infoBoxHeader}</div>
      <div>{infoBoxText}</div>
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

.infobox-header {
  background: #8E8668;
  color: white;
  font-size: smaller;
}

.newlists { margin-top: 4px; }
</style>
