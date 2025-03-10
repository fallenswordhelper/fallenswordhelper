<script>
  import LinkBtn from '../../common/LinkBtn.svelte';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';
  import { get, set } from '../../system/idb';

  let {
    cbChange,
    checks = $bindable(Array(11).fill(true)),
    clearSearch,
    oldGuildLog,
    searchValue = $bindable(''),
    selectAll,
    selectNone,
    refresh,
  } = $props();

  function storeChecks() {
    set('fsh_LogChecks', $state.snapshot(checks));
  }

  function doCbChange() {
    storeChecks();
    cbChange();
  }

  function updateChecks(to) {
    checks = checks.map(() => to);
    storeChecks();
  }

  function doSelectAll() {
    updateChecks(true);
    selectAll();
  }

  function doSelectNone() {
    updateChecks(false);
    selectNone();
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
          type="checkbox"
          value="6"
        />
      </label>
    </div>
    <div>
      <LinkBtn onclick={oldGuildLog}>Old Guild Log</LinkBtn>
    </div>
    <div>
      <label>
        Donations:
        <input
          bind:checked={checks[7]}
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
          onchange={doCbChange}
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
        <LinkBtnBracketed onclick={doSelectAll}>Select All</LinkBtnBracketed>
      </div>
      <div>
        <LinkBtnBracketed onclick={doSelectNone}>Select None</LinkBtnBracketed>
      </div>
      <div>
        <LinkBtnBracketed onclick={refresh}>Refresh</LinkBtnBracketed>
      </div>
    </div>
    <div class="search-box">
      <label>
        Search:
        <span class="search-wrapper">
          <input bind:value={searchValue} type="text" />
          <LinkBtn
            --button-deco="none"
            disabled={!searchValue}
            onclick={clearSearch}
          >
            &times;
          </LinkBtn>
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
