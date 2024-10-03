<script>
  import { createEventDispatcher } from 'svelte';
  import LinkButton from '../../common/LinkButton.svelte';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import { get, set } from '../../system/idb';

  const dispatch = createEventDispatcher();
  export let checks = Array(11).fill(true);
  export let searchValue = '';

  function storeChecks() {
    set('fsh_LogChecks', checks);
  }

  function cbChange() {
    storeChecks();
    dispatch('cbChange');
  }

  function oldGuildLog() {
    dispatch('oldGuildLog');
  }

  function updateChecks(to) {
    checks = checks.map(() => to);
    storeChecks();
  }

  function selectAll() {
    updateChecks(true);
    dispatch('selectAll');
  }

  function selectNone() {
    updateChecks(false);
    dispatch('selectNone');
  }

  function refresh() {
    dispatch('refresh');
  }

  function clearSearch() {
    dispatch('clearSearch');
  }

  async function init() {
    checks = (await get('fsh_LogChecks')) ?? Array(11).fill(true);
  }

  init();
</script>

<div class="filter-header">
  <div class="filters">
    <div class="front">
      <span>Filters:</span>
    </div>
    <div>
      <label>
        Potions:
        <input
          bind:checked={checks[1]}
          on:change={cbChange}
          type="checkbox"
          value="1"
        />
      </label>
    </div>
    <div>
      <label>
        Store/Recalls:
        <input
          bind:checked={checks[2]}
          on:change={cbChange}
          type="checkbox"
          value="2"
        />
      </label>
    </div>
    <div>
      <label>
        Relics:
        <input
          bind:checked={checks[4]}
          on:change={cbChange}
          type="checkbox"
          value="4"
        />
      </label>
    </div>
    <div>
      <label>
        Mercenaries:
        <input
          bind:checked={checks[5]}
          on:change={cbChange}
          type="checkbox"
          value="5"
        />
      </label>
    </div>
    <div>
      <label>
        Group Combats:
        <input
          bind:checked={checks[6]}
          on:change={cbChange}
          type="checkbox"
          value="6"
        />
      </label>
    </div>
    <div>
      <LinkButton on:click={oldGuildLog}>Old Guild Log</LinkButton>
    </div>
    <div>
      <label>
        Donations:
        <input
          bind:checked={checks[7]}
          on:change={cbChange}
          type="checkbox"
          value="7"
        />
      </label>
    </div>
    <div>
      <label>
        Rankings:
        <input
          bind:checked={checks[8]}
          on:change={cbChange}
          type="checkbox"
          value="8"
        />
      </label>
    </div>
    <div>
      <label>
        GvGs:
        <input
          bind:checked={checks[9]}
          on:change={cbChange}
          type="checkbox"
          value="9"
        />
      </label>
    </div>
    <div>
      <label>
        Tag/UnTags:
        <input
          bind:checked={checks[3]}
          on:change={cbChange}
          type="checkbox"
          value="3"
        />
      </label>
    </div>
    <div>
      <label>
        Titans:
        <input
          bind:checked={checks[10]}
          on:change={cbChange}
          type="checkbox"
          value="10"
        />
      </label>
    </div>
    <div>
      <label>
        Other:
        <input
          bind:checked={checks[0]}
          on:change={cbChange}
          type="checkbox"
          value="0"
        />
      </label>
    </div>
  </div>
  <div class="button-row">
    <div></div>
    <div class="buttons">
      <div>
        <LinkButtonBracketed on:click={selectAll}
          >Select All</LinkButtonBracketed
        >
      </div>
      <div>
        <LinkButtonBracketed on:click={selectNone}
          >Select None</LinkButtonBracketed
        >
      </div>
      <div>
        <LinkButtonBracketed on:click={refresh}>Refresh</LinkButtonBracketed>
      </div>
    </div>
    <div class="search-box">
      <label>
        Search:
        <span class="search-wrapper">
          <input bind:value={searchValue} type="text" />
          <LinkButton
            --button-deco="none"
            disabled={!searchValue}
            on:click={clearSearch}>&times;</LinkButton
          >
        </span>
      </label>
    </div>
  </div>
</div>

<style>
  .filter-header {
    color-scheme: light;
    margin-bottom: 4px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .filters {
    align-items: center;
    display: grid;
    gap: 2px;
    grid-template-columns: 48px repeat(6, 1fr);
    justify-items: end;
  }
  .front {
    font-weight: bold;
    grid-column: 1;
    grid-row: 1 / 3;
  }
  .button-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 8px;
  }
  .buttons {
    --button-color: #383838;
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .search-box {
    text-align: right;
  }
  .search-wrapper {
    background-color: white;
    border: 1px solid #383838;
    border-radius: 4px;
    padding-right: 4px;
  }
  input[type='text'] {
    border: none;
  }
</style>
