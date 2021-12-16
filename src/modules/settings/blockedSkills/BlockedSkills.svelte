<script>
import getValueJSON from '../../system/getValueJSON';
import setValue from '../../system/setValue';
import {
  checkLoadList,
  checkNewList,
  checkUpdateList,
} from './errorChecks';
import {
  checkSkill,
  clearCheckedSkills,
  findList,
  getCheckedSkills,
  submitSkillChanges,
} from './blockedSkills';

let blockedSkillLists = getValueJSON('blockedSkillLists');
let newListName = '';
let listName = '';
let infoBoxHeader = '';
let infoBoxText = '';

function clearMessages() {
  infoBoxText = '';
}

function infoBox(msg, header = 'INFORMATION') {
  infoBoxHeader = header;
  infoBoxText = msg;
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

async function storeBlockedSkillsLists() {
  infoBox('Applying list...');
  setValue('blockedSkillLists', JSON.stringify(blockedSkillLists));
  submitChanges();
}

function applyList() {
  clearMessages();

  if (!listName) {
    return;
  }

  const skillList = blockedSkillLists.find((l) => l.name === listName);

  infoBox(checkLoadList(blockedSkillLists, skillList), 'ERROR');
  if (infoBoxText) {
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

  infoBox(checkNewList(blockedSkillLists, newList), 'ERROR');
  if (infoBoxText) {
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

  infoBox(checkUpdateList(blockedSkillLists, skillList), 'ERROR');
  if (infoBoxText) {
    return;
  }

  const index = blockedSkillLists.findIndex((l) => l.name === listName);
  blockedSkillLists[index] = skillList;
  storeBlockedSkillsLists();
  submitChanges();
}

function findLoadList() {
  const list = findList(blockedSkillLists, getCheckedSkills());
  if (list) {
    listName = list.name;
  }

  if (blockedSkillLists.length >= 10) {
    infoBox('Having more than 10 blocked skills lists may slow down this page.');
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

.infobox .infobox-header {
  background: #8E8668;
  color: white;
  font-size: smaller;
}

#newlists { margin-top: 4px; }
</style>
