<script>
  import daGuildFetchInv from '../../_dataAccess/daGuildFetchInv';
  import daGuildReport from '../../_dataAccess/daGuildReport';
  import sendEvent from '../../analytics/sendEvent';
  import all from '../../common/all';
  import alpha from '../../common/alpha';
  import deepClone from '../../common/deepClone';
  import isArray from '../../common/isArray';
  import uniq from '../../common/uniq';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { get, set } from '../../system/idb';
  import perc2color from './perc2color';

  const storageKey = 'fsh_potReport';
  const defaultOpts = {
    inventory: false,
    mapping: false,
    thresholds: false,
    potMap: [],
    minpoint: 20,
    maxpoint: 30,
    backpack: true,
    guildstore: true,
  };
  const backpackLoc = 1;
  const guildStoreLoc = 2;

  export let visible = true;

  let options = null;
  let inventoryRender = false;
  let mappingRender = false;
  let thresholdRender = false;
  let countPots = [];
  let currentInventory = [];
  let renderMap = [];

  const composed = ({ t }) => t === 15;
  const countBg = (count) =>
    perc2color(count, options.minpoint, options.maxpoint);
  const ignored = ({ ignore }) => !ignore;
  const nameSearch =
    (n) =>
    ({ name }) =>
      name === n;
  const nameSort = (a, b) => alpha(a.n, b.n);
  const result = ({ r }) => r;
  const sendPrEvent = (type) => sendEvent('pot-report', type);
  const setLocation = ({ player, n }) => ({
    loc: player ? backpackLoc : guildStoreLoc,
    n,
  });
  const storeOptions = () => set(storageKey, options);

  const buildCurrentInventory = (json) =>
    json.flatMap(result).filter(composed).map(setLocation).sort(nameSort);
  const countFromInv =
    (inv) =>
    ({ mapped }) => ({
      name: mapped,
      count: inv.filter(({ mapped: invMap }) => invMap === mapped).length,
    });
  const byMap =
    (mappedPots) =>
    ({ n }) =>
      mappedPots.some(nameSearch(n));
  const addMapping =
    (mappedPots) =>
    ({ loc, n }) => ({
      loc,
      mapped: mappedPots.find(nameSearch(n)).mapped,
      n,
    });
  const buildInv = (mappedPots) =>
    currentInventory
      .filter(byMap(mappedPots))
      .filter(({ loc }) => options.backpack || loc !== backpackLoc)
      .filter(({ loc }) => options.guildstore || loc !== guildStoreLoc)
      .map(addMapping(mappedPots));
  const buildMapping = (pots) =>
    uniq(pots, 'n').map(({ n }) => ({
      name: n,
      mapped: options?.potMap?.find(nameSearch(n))?.mapped || n,
      ignore: options?.potMap?.find(nameSearch(n))?.ignore ?? false,
    }));

  function buildCount() {
    const mappedPots = options.potMap.filter(ignored);
    const inv = buildInv(mappedPots);
    return uniq(mappedPots, 'mapped').map(countFromInv(inv));
  }

  function doMapping() {
    storeOptions();
    countPots = buildCount();
    renderMap = options.potMap.map((o) => ({ ...o, waiting: true }));
  }

  function mappingChange() {
    options.potMap = renderMap.map(({ ignore, mapped, name }) => ({
      ignore,
      mapped,
      name,
    }));
    doMapping();
  }

  function ignoreAll() {
    options.potMap = options.potMap.map((o) => ({ ...o, ignore: true }));
    doMapping();
  }

  function doReset() {
    options.potMap = options.potMap.map((o) => ({
      ...o,
      mapped: o.name,
      ignore: false,
    }));
    doMapping();
  }

  async function getOptions() {
    options = (await get(storageKey)) || deepClone(defaultOpts);
    inventoryRender = options.inventory;
    mappingRender = options.mapping;
    thresholdRender = options.thresholds;
    options.backpack = options.backpack ?? defaultOpts.backpack;
    options.guildstore = options.guildstore ?? defaultOpts.guildstore;
  }

  async function init() {
    getOptions();
    const json = await all([daGuildFetchInv(), daGuildReport()]);
    if (!isArray(json[0]?.r) || !isArray(json[1]?.r))
      throw new Error('Server Error');
    currentInventory = buildCurrentInventory(json);
    options.potMap = buildMapping(currentInventory);
    doMapping();
  }
</script>

<ModalTitled
  {visible}
  on:close={() => {
    sendPrEvent('close');
    visible = false;
  }}
>
  <svelte:fragment slot="title">Pot Report</svelte:fragment>
  <div class="main">
    {#await init()}
      Loading...
    {:then}
      <div class="filters">
        <label>
          <input
            bind:checked={options.backpack}
            on:change={() => {
              sendPrEvent('backpack');
              storeOptions();
              doMapping();
            }}
            type="checkbox"
          />
          Member Backpacks
        </label>
        <label>
          <input
            bind:checked={options.guildstore}
            on:change={() => {
              sendPrEvent('guildstore');
              storeOptions();
              doMapping();
            }}
            type="checkbox"
          />
          Guild Store
        </label>
      </div>
      <div class="pot-report">
        <input
          bind:checked={options.inventory}
          class="tab-ctrl"
          id="pr-inv"
          on:change={() => {
            sendPrEvent('inventory');
            storeOptions();
          }}
          on:click|once={() => {
            inventoryRender = true;
          }}
          type="checkbox"
        />
        <label for="pr-inv">Composed Potion Inventory</label>
        <input
          bind:checked={options.mapping}
          class="tab-ctrl"
          id="pr-map"
          on:change={() => {
            sendPrEvent('mapping');
            storeOptions();
          }}
          on:click|once={() => {
            mappingRender = true;
          }}
          type="checkbox"
        />
        <label for="pr-map">Mapping</label>
        <input
          bind:checked={options.thresholds}
          class="tab-ctrl"
          id="pr-levels"
          on:change={() => {
            sendPrEvent('thresholds');
            storeOptions();
          }}
          on:click|once={() => {
            thresholdRender = true;
          }}
          type="checkbox"
        />
        <label for="pr-levels">Thresholds</label>
        <div class="panels">
          {#if inventoryRender}
            <div class="inventory">
              <div class="inventory-grid-container">
                {#each countPots as { name, count }}
                  <div>{name}</div>
                  <div style:background-color={countBg(count)}>
                    {count}
                  </div>
                {/each}
              </div>
            </div>
          {/if}
          {#if mappingRender}
            <div class="mapping">
              <div class="mapping-grid-container">
                {#each renderMap as { name, mapped, ignore, waiting }}
                  <div>{name}</div>
                  <div>
                    <select
                      bind:value={mapped}
                      {name}
                      on:change={() => {
                        sendPrEvent('mapped');
                        mappingChange();
                      }}
                      on:mousedown={() => {
                        waiting = false;
                      }}
                    >
                      {#if waiting}
                        <option>{mapped}</option>
                      {:else}
                        {#each renderMap as { name: innerName }}
                          <option selected={mapped === innerName}
                            >{innerName}</option
                          >
                        {/each}
                      {/if}
                    </select>
                  </div>
                  <div>
                    <input
                      bind:checked={ignore}
                      on:change={() => {
                        sendPrEvent('ignore');
                        mappingChange();
                      }}
                      on:click={(e) => e.target.blur()}
                      title="Ignore"
                      type="checkbox"
                    />
                  </div>
                {/each}
                <div></div>
                <div>
                  <button
                    class="custombutton"
                    on:click={() => {
                      sendPrEvent('ignore-all');
                      ignoreAll();
                    }}
                    type="button"
                  >
                    Ignore All
                  </button>
                  <button
                    class="custombutton"
                    on:click={() => {
                      sendPrEvent('reset');
                      doReset();
                    }}
                    type="button"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          {/if}
          {#if thresholdRender}
            <div class="thresholds">
              Min:
              <input
                bind:value={options.minpoint}
                max="999"
                min="0"
                on:input={() => {
                  sendPrEvent('minpoint');
                  doMapping();
                }}
                type="number"
              />
              Max:
              <input
                bind:value={options.maxpoint}
                max="999"
                min="0"
                on:input={() => {
                  sendPrEvent('maxpoint');
                  doMapping();
                }}
                type="number"
              />
            </div>
          {/if}
        </div>
      </div>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</ModalTitled>

<style>
  .main {
    color-scheme: light;
    font-size: 12px;
    max-height: calc(100vh - 100px);
    text-align: center;
    width: 640px;
  }
  .filters {
    padding: 10px;
  }
  .filters label {
    display: inline-block;
    width: 150px;
  }
  .pot-report {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
  }
  .tab-ctrl {
    display: none;
  }
  .pot-report label {
    background: #fece2f;
    color: #4c3000;
    margin-right: -1px;
    padding: 0.5em 1em;
  }
  input:checked + label {
    background: #ffa614;
    color: #381f00;
  }
  .pot-report label:hover {
    background: #f0be00;
    color: #381f00;
    cursor: pointer;
  }
  .panels {
    column-gap: 12px;
    display: flex;
    justify-content: center;
    width: 640px;
  }
  .panels > div {
    display: none;
  }
  #pr-inv:checked ~ .panels > .inventory,
  #pr-map:checked ~ .panels > .mapping,
  #pr-levels:checked ~ .panels > .thresholds {
    display: inline-block;
  }
  .inventory-grid-container {
    column-gap: 2px;
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 2px;
    text-align: right;
  }
  .mapping-grid-container {
    align-items: center;
    column-gap: 2px;
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 2px;
  }
  .inventory-grid-container div {
    height: 18px;
    line-height: 18px;
  }
  .inventory-grid-container div:nth-child(even) {
    min-width: 16px;
    padding-left: 2px;
    padding-right: 2px;
  }
  .inventory-grid-container div:nth-child(odd),
  .mapping-grid-container div:nth-child(3n - 2) {
    max-width: 192px;
    overflow-x: hidden;
  }
  select {
    width: 130px;
  }
  .mapping-grid-container input {
    vertical-align: text-top;
  }
  button {
    font-family: inherit;
    font-size: inherit;
  }
  .thresholds input {
    display: block;
    background-color: #f7ebd3;
    border-style: solid;
    border-width: 1px;
    border-color: #a9772c #f3d99d #f3d99d #a9772c;
    width: 4em;
  }
</style>
