<script>
  import daQuestBook from '../../_dataAccess/daQuestBook';
  import alpha from '../../common/alpha';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { guideUrl } from '../../support/constants';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import { cdn } from '../../system/system';

  let {
    seasonal = $bindable(false),
    status = $bindable('active'),
    visible = $bindable(true),
  } = $props();

  // Split is for backwards compatability
  let hiddenQuests = $state(getValue('hideQuestNames').split(','));
  function updateHiddenQuests() {
    setValue('hideQuestNames', hiddenQuests.join(','));
  }
  function hideQuest(quest) {
    hiddenQuests = [...hiddenQuests, quest.name];
    updateHiddenQuests();
  }
  function unHideQuest(quest) {
    hiddenQuests = hiddenQuests.filter((i) => i !== quest.name);
    updateHiddenQuests();
  }

  let query = $state('');
  let realm = $state('');
  let minLvl = $state(0);
  let maxLvl = $state(6000);

  let questBook = $state([]);
  async function loadQuestBook() {
    const response = await daQuestBook();
    questBook = response.r.map((i) => {
      const quest = { ...i, realm_name: i.realm.name };
      return quest;
    });
  }

  function includes(string, queryString) {
    return string.toUpperCase().includes(queryString.toUpperCase());
  }

  function inputFilters(questName, realmName, minLevel, maxLevel) {
    return (i) =>
      i.min_level >= minLevel &&
      i.min_level <= maxLevel &&
      includes(i.realm_name, realmName) &&
      includes(i.name, questName);
  }

  const statusFilters = {
    active: (i) => i.current_stage > 0 && i.max_stage > i.current_stage,
    notStarted: (i) => i.current_stage === 0,
    completed: (i) => i.current_stage === i.max_stage,
    hidden: (i) => hiddenQuests.includes(i.name),
  };

  let seasonalQuests = $derived(
    questBook.filter((i) => i.seasonal === seasonal),
  );
  let progress = $derived(
    seasonalQuests.filter(statusFilters.completed).length /
      seasonalQuests.length,
  );
  let queryQuests = $derived(
    seasonalQuests
      .filter(statusFilters[status])
      .filter((i) => hiddenQuests.includes(i.name) === (status === 'hidden'))
      .filter(inputFilters(query, realm, minLvl, maxLvl)),
  );

  let lastSort = '';
  function sortQuests(feature) {
    if (lastSort === feature) questBook.reverse();
    else if (typeof questBook[0][feature] === 'string')
      questBook.sort((a, b) => alpha(a[feature], b[feature]));
    else questBook.sort((a, b) => a[feature] - b[feature]);
    questBook = questBook;
    lastSort = feature;
  }

  function close() {
    visible = false;
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Quest Book
  {/snippet}
  <div id="fshQuestContainer">
    {#await loadQuestBook()}
      Loading...
    {:then}
      <h1>Quest Book</h1>
      <p>
        [
        <label class:active={!seasonal} class="asLink">
          <input
            type="radio"
            name="seasonal"
            bind:group={seasonal}
            value={false}
          />
          Normal
        </label>
        &vert;
        <label class:active={seasonal} class="asLink">
          <input
            type="radio"
            name="seasonal"
            bind:group={seasonal}
            value={true}
          />
          Seasonal
        </label>
        ]
      </p>
      <p>Total {seasonal ? 'Seasonal' : 'Normal'} Quest Progress:</p>
      <div id="fshQuestProgress">
        <img
          src="{cdn}ui/misc/progress_purple.png"
          style="width: {100 * progress}%"
          height="10"
          class="tip-static"
          alt="Progress"
          data-tipped="<span class='fshHelpTitle'>Quests Completed</span><br>{seasonalQuests.filter(
            statusFilters.completed,
          ).length} / {seasonalQuests.length}"
        />
      </div>
      <p>
        [
        <label class="asLink" class:active={status === 'active'}>
          <input type="radio" bind:group={status} value="active" />
          Active
        </label>
        |
        <label class="asLink" class:active={status === 'completed'}>
          <input type="radio" bind:group={status} value="completed" />
          Complete
        </label>
        |
        <label class="asLink" class:active={status === 'notStarted'}>
          <input type="radio" bind:group={status} value="notStarted" />
          Not Started
        </label>
        |
        <label class="asLink" class:active={status === 'hidden'}>
          <input type="radio" bind:group={status} value="hidden" />
          Hidden
        </label>
        ]
      </p>
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Search quest name"
                bind:value={query}
              />
            </td>
            <td>
              Min lvl - Max lvl<br />
              <input type="number" placeholder="Min lvl" bind:value={minLvl} />
              -
              <input type="number" placeholder="Max lvl" bind:value={maxLvl} />
            </td>
            <td>
              <input
                type="text"
                placeholder="Search realm name"
                bind:value={realm}
              />
            </td>
          </tr>
          <tr>
            <th
              width="20%"
              onclick={() => sortQuests('name')}
              class="fshPointer"
            >
              Quest Name
            </th>
            <th
              width="20%"
              onclick={() => sortQuests('min_level')}
              class="fshPointer"
            >
              Level
            </th>
            <th
              width="25%"
              onclick={() => sortQuests('realm_name')}
              class="fshPointer"
            >
              Starting Realm
            </th>
            <th
              width="10%"
              onclick={() => sortQuests('current_stage')}
              class="fshPointer"
            >
              Status
            </th>
            <th width="10%">Guides</th>
            <th width="10%">Hide</th>
          </tr>
        </thead>
        <tbody>
          {#each queryQuests as quest (quest.id)}
            <tr>
              <td>
                <a
                  href="https://fallensword.com/index.php?cmd=questbook&subcmd=viewquest&quest_id={quest.id}"
                >
                  {quest.name}
                </a>
              </td>
              <td>{quest.min_level}</td>
              <td>
                <a
                  href="{guideUrl}realms&subcmd=view&realm_id={quest.realm.id}"
                  target="_blank"
                  rel="noreferrer"
                >
                  {quest.realm.name}
                </a>
              </td>
              <td>
                <div
                  class="fshPercentbar"
                  class:complete={quest.current_stage === quest.max_stage}
                >
                  <!-- eslint-disable-next-line no-unused-vars -->
                  {#each Array(quest.max_stage) as _, i (i)}
                    <div
                      class="fshStage"
                      class:incomplete={i >= quest.current_stage}
                    ></div>
                  {/each}
                  <div class="percentbar-value">
                    {Math.round(100 * (quest.current_stage / quest.max_stage))}%
                  </div>
                </div>
              </td>
              <td>
                <a
                  href="{guideUrl}quests&subcmd=view&quest_id={quest.id}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://fallensword.com/favicon.ico"
                    alt="UFSG"
                    width="16"
                    hieght="16"
                    class="tip-static"
                    data-tipped="Search for this quest on the Ultimate Fallen Sword Guide"
                  />
                </a>
                <a
                  href="https://wiki.fallensword.com/index.php?title={quest.name.replace(
                    / /g,
                    '_',
                  )}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="{cdn}ui/misc/wiki.png"
                    alt="Wiki"
                    width="16"
                    height="16"
                    class="tip-static"
                    data-tipped="Search for this quest on the Wiki"
                  />
                </a>
              </td>
              <td>
                {#if status === 'hidden'}
                  <button type="button" onclick={unHideQuest(quest)}>
                    Unhide
                  </button>
                {:else}
                  <button type="button" onclick={hideQuest(quest)}>Hide</button>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/await}
  </div>
</ModalTitled>

<style>
  #fshQuestContainer {
    min-width: 620px;
    font-size: 12px;
  }
  h1 {
    font-weight: bold;
  }
  .active {
    color: #f00;
    text-decoration: none;
    cursor: default;
  }
  table thead tr {
    vertical-align: bottom;
  }
  table thead tr th {
    background: rgb(205, 158, 75);
    padding: 0px 4px;
  }
  table td:nth-child(2),
  table td:nth-child(4),
  table td:nth-child(5),
  table td:nth-child(6),
  table th:nth-child(2),
  table th:nth-child(4),
  table th:nth-child(5),
  table th:nth-child(6),
  p {
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
  table td:nth-child(5) img {
    border: solid 1px #4f3717;
    border-radius: 2px;
  }
  table {
    text-align: left;
    border-spacing: 0;
  }
  table td {
    padding-bottom: 0.5em;
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
  #fshQuestProgress {
    width: 300px;
    display: block;
    margin: 0px auto;
    border: 1px solid black;
    padding-left: 2px;
    padding-right: 2px;
    text-align: left;
  }
  .fshPointer {
    cursor: pointer;
  }
  input[type='number'] {
    width: 40%;
  }
  table img {
    display: inline;
  }
</style>
