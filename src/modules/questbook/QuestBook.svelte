<script>
import daQuestBook from '../_dataAccess/daQuestBook';
import { guideUrl } from '../support/constants';
import getValue from '../system/getValue';
import setValue from '../system/setValue';
import { cdn } from '../system/system';

export let seasonal = false;
export let status = 'active';

// Split is for backwards compatability
let hiddenQuests = getValue('hideQuestNames').split(',');
function hideQuest(quest) {
  hiddenQuests = [...hiddenQuests, quest.name];
  setValue('hideQuestNames', hiddenQuests.join(','));
}
function unHideQuest(quest) {
  hiddenQuests = hiddenQuests.filter((i) => i !== quest.name);
  setValue('hideQuestNames', hiddenQuests.join(','));
}

const pageLength = 22;
let page = 0;
let query = '';
let realm = '';
let minLvl = 0;
let maxLvl = 6000;

let questBook = [];
async function loadQuestBook() {
  const response = await daQuestBook();
  questBook = response.r.map((i) => {
    i.realm_name = i.realm.name; // eslint-disable-line no-param-reassign
    i.progress = [i.current_stage, i.max_stage]; // eslint-disable-line no-param-reassign
    return i;
  });
}

let progress;
$: {
  const seasonalQuests = questBook.filter((i) => i.seasonal === seasonal);
  const complete = (i) => i.current_stage === i.max_stage;
  progress = seasonalQuests.filter(complete).length / seasonalQuests.length;
}

let questPage = [];
let pages = 0;
$: {
  const hidden = (q) => hiddenQuests.includes(q.name);
  questPage = questBook.filter((i) => i.seasonal === seasonal
    && i.min_level >= minLvl && i.min_level <= maxLvl
    && i.realm_name.toUpperCase().includes(realm.toUpperCase())
    && i.name.toUpperCase().includes(query.toUpperCase()));
  if (status === 'hidden') {
    questPage = questPage.filter(hidden);
  } else {
    questPage = questPage.filter((i) => !hidden(i));
    if (status === 'active') {
      questPage = questPage.filter((i) => i.current_stage > 0 && i.max_stage > i.current_stage);
    } else if (status === 'notStarted') {
      questPage = questPage.filter((i) => i.current_stage === 0);
    } else if (status === 'completed') {
      questPage = questPage.filter((i) => i.current_stage === i.max_stage);
    }
  }
  pages = Math.max(1, Math.ceil(questPage.length / pageLength));
  page = Math.min(page, pages - 1);
  questPage = questPage.slice(page * pageLength, (page + 1) * pageLength);
}

let lastSort = '';
function sortQuests(feature) {
  if (lastSort === feature) {
    questBook.reverse();
  } else {
    questBook.sort((a, b) => a[feature] > b[feature]);
  }
  questBook = questBook;
  lastSort = feature;
}
</script>
<div id="fsh-quest-container">
{#await loadQuestBook()}
Loading...
{:then}
  <h1>Quest Book</h1>
  <p>[
    <label class:active="{!seasonal}" class="asLink">
      <input
          type="radio"
          name="seasonal"
          bind:group={seasonal}
          value={false}>
      Normal
    </label>
    &vert;
    <label class:active="{seasonal}" class="asLink">
      <input
          type="radio"
          name="seasonal"
          bind:group={seasonal}
          value={true}>
      Seasonal
    </label>
  ]</p>
  Total {seasonal ? 'Seasonal' : 'Normal'} Quest Progress:<br>
  <div id="quest-progress">
    <img
        src="{cdn}ui/misc/progress_purple.png"
        style="width: {100 * progress}%"
        height="10"
        class="tip-static"
        data-tipped="Quests Completed:<br>complete / total" >
  </div>
  <p style="text-align: center;">
    &lsqb;
    <label class="asLink" class:active="{status === 'active'}">
      <input type="radio" bind:group={status} value={'active'}>
      Active
    </label> &vert;
    <label class="asLink" class:active="{status === 'completed'}">
      <input type="radio" bind:group={status} value={'completed'}>
      Complete
    </label> &vert;
    <label class="asLink" class:active="{status === 'notStarted'}">
      <input type="radio" bind:group={status} value={'notStarted'}>
      Not Started
    </label> &vert;
    <label class="asLink" class:active="{status === 'hidden'}">
      <input type="radio" bind:group={status} value={'hidden'}>
      Hidden
    </label>
    &rsqb;
  </p>
  <table>
    <thead>
      <tr>
        <td>
          <input type="text" placeholder="Search quest name" bind:value={query}>
        </td>
        <td>
          <input type="number" placeholder="Min lvl" bind:value={minLvl}> -
          <input type="number" placeholder="Max lvl" bind:value={maxLvl}>
        </td>
        <td>
          <input type="text" placeholder="Search realm name" bind:value={realm}>
        </td>
      </tr>
      <tr>
        <th width="20%" on:click={() => sortQuests('name')} class="pointer">Quest Name</th>
        <th width="20%" on:click={() => sortQuests('min_level')} class="pointer">Level</th>
        <th width="25%" on:click={() => sortQuests('realm_name')} class="pointer">Starting Realm</th>
        <th width="10%" on:click={() => sortQuests('current_stage')} class="pointer">Status</th>
        <th width="10%">Guides</th>
        <th width="10%">Hide</th>
      </tr>
    </thead>
    <tbody>
    {#each questPage as quest}
      <tr>
        <td>
          <a href="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id={quest.id}">
            {quest.name}
          </a>
        </td>
        <td>{quest.min_level}</td>
        <td>
          <a
              href="{guideUrl}realms&subcmd=view&realm_id={quest.realm.id}"
              target="_blank"
              rel="noreferrer">
            {quest.realm.name}
          </a>
        </td>
        <td>
          <div class="fshPercentbar" class:complete="{quest.current_stage === quest.max_stage}">
          {#each Array(quest.max_stage) as _, i (i)}
            <div class="fshStage" class:incomplete="{i >= quest.current_stage}"></div>
          {/each}
            <div class="percentbar-value">{Math.round(100 * (quest.current_stage / quest.max_stage))}%</div>
          </div>
        </td>
        <td>
          <a
              href="{guideUrl}quests&subcmd=view&quest_id={quest.id}"
              class="fshTempleOne"
              data-tooltip="Search for this quest on the Ultimate Fallen Sword Guide"
              target="_blank"
              rel="noreferrer"></a>
          <a
              href="https://wiki.fallensword.com/index.php?title={quest.name.replace(/ /g, '_')}"
              class="fshWiki"
              data-tooltip="Search for this quest on the Wiki"
              target="_blank"
              rel="noreferrer"></a>
        </td>
        <td>
          {#if status === 'hidden'}
          <button type="button" on:click={unHideQuest(quest)}>Unhide</button>
          {:else}
          <button type="button" on:click={hideQuest(quest)}>Hide</button>
          {/if}
        </td>
      </tr>
    {/each}
    </tbody>
  </table>
  {#if pages > 1}
  <p>Page {#each Array(pages) as _, i (i)}
    <label class="asLink" class:active="{i === page}">
      <input type="radio" bind:group={page} value={i} name="page">
      {i + 1}
    </label>&nbsp;
    {/each}
  </p>
  {/if}
{/await}
</div>
<style>
#fsh-quest-container {
  width: 640px;
  min-height: 700px;
}
#fsh-quest-container h1 { font-weight: bold; }
#fsh-quest-container .active {
  color: #f00;
  text-decoration: none;
  cursor: default;
}
#fsh-quest-container table thead tr th {
  background: rgb(205,158,75);
  padding: 0px 4px;
}
#fsh-quest-container table td:nth-child(2),
#fsh-quest-container table td:nth-child(4),
#fsh-quest-container table td:nth-child(5),
#fsh-quest-container table td:nth-child(6),
#fsh-quest-container table th:nth-child(2),
#fsh-quest-container table th:nth-child(4),
#fsh-quest-container table th:nth-child(5),
#fsh-quest-container table th:nth-child(6) {
  text-align: center;
}
.fshPercentbar {
  display: flex;
  height: 12px;
  background: #f69003;
  box-shadow: inset 0 0 4px 2px #e95d04;
  border: 1px solid #634229;
  border-left: none;
  position: relative;
  box-shadow: inset 0 0 4px 2px #e95d04;
}
.fshPercentbar.complete {
  background: #71c971;
  box-shadow: inset 0 0 4px 2px #42aa42;
}
.fshStage {
  display: inline-block;
  border-left: 1px solid #634229;
  flex: 1;
}
.fshStage.incomplete {
  background: #c5a869;
}
#fsh-quest-container table td:nth-child(5) a{
  height: 17.4px;
  width: 17.4px;
  background-size: contain;
  border: solid 1px #4f3717;
  border-radius: 2px;
}
#fsh-quest-container {
  text-align: center;
}
#fsh-quest-container table {
 text-align: left;
 width: 100%;
}

.asLink {
  border: none;
  background: none;
  margin: 0px;
  padding: 0px;
  text-decoration: underline;
  cursor: pointer;
  font-size: inherit;
}
.asLink input {
  display: none;
}
#quest-progress {
  width: 300px;
  display: inline-block;
  border: 1px solid black;
  padding-left: 2px;
  padding-right: 2px;
  text-align: left;
}
.pointer {
  cursor: pointer;
}
input[type="number"] { width: 40%; }
</style>
