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
  };

  export let visible = true;
  let options = null;
  let inventoryRender = false;
  let mappingRender = false;
  let thresholdRender = false;
  let countPots = [];

  const sendPrEvent = (type) => sendEvent('pot-report', type);
  const storeOptions = () => set(storageKey, options);
  const result = ({ r }) => r;
  const composed = ({ t }) => t === 15;
  const theName = ({ n }) => n;
  const listPots = (json) => json.flatMap(result).filter(composed).map(theName).sort(alpha);
  const buildMap = (pots) => uniq(pots).map((n) => ({
    name: n,
    mapped: options?.potMap?.find(({ name }) => name === n)?.mapped || n,
    ignore: options?.potMap?.find(({ name }) => name === n)?.ignore ?? false,
    waiting: true,
    count: pots.filter((name) => name === n).length,
  }));
  const ignored = ({ ignore }) => !ignore;
  const sum = (prev, { count }) => prev + count;

  function rollup() {
    const mappedPots = options.potMap.filter(ignored);
    return uniq(mappedPots, 'mapped').map(({ mapped }) => ({
      name: mapped,
      count: mappedPots.filter(({ mapped: mp }) => mp === mapped).reduce(sum, 0),
    }));
  }

  async function getOptions() {
    options = await get(storageKey) || deepClone(defaultOpts);
    inventoryRender = options.inventory;
    mappingRender = options.mapping;
    thresholdRender = options.thresholds;
  }

  function doMapping() {
    storeOptions();
    countPots = rollup();
  }

  function ignoreAll() {
    options.potMap = options.potMap.map((o) => ({ ...o, ignore: true }));
    doMapping();
  }

  function doReset() {
    options.potMap = options.potMap.map((o) => ({ ...o, mapped: o.name, ignore: false }));
    doMapping();
  }

  async function init() {
    getOptions();
    const json = await all([daGuildFetchInv(), daGuildReport()]);
    if (!isArray(json[0]?.r) || !isArray(json[1]?.r)) throw new Error('Server Error');
    const pots = listPots(json);
    options.potMap = buildMap(pots);
    doMapping();
  }
</script>

<ModalTitled
  { visible }
  on:close={ () => sendPrEvent('close') }
  on:close={ () => { visible = false; } }
>
  <svelte:fragment slot="title">Pot Report</svelte:fragment>
  <div class="pot-report">
    { #await init() }
      Loading...
    { :then}
      <input
        bind:checked={ options.inventory }
        class="tab-ctrl"
        id="pr-inv"
        on:change={ () => sendPrEvent('inventory') }
        on:change={ storeOptions }
        on:click|once={ () => { inventoryRender = true; } }
        type="checkbox"
      >
      <label for="pr-inv">Composed Potion Inventory</label>
      <input
        bind:checked={ options.mapping }
        class="tab-ctrl"
        id="pr-map"
        on:change={ () => sendPrEvent('mapping') }
        on:change={ storeOptions }
        on:click|once={ () => { mappingRender = true; } }
        type="checkbox"
      >
      <label for="pr-map">Mapping</label>
      <input
        bind:checked={ options.thresholds }
        class="tab-ctrl"
        id="pr-levels"
        on:change={ () => sendPrEvent('thresholds') }
        on:change={ storeOptions }
        on:click|once={ () => { thresholdRender = true; } }
        type="checkbox"
      >
      <label for="pr-levels">Thresholds</label>
      <div class="panels">
        { #if inventoryRender }
          <div class="inventory">
            <div class="inventory-grid-container">
              { #each countPots as { name, count } }
                <div>{ name }</div>
                <div
                  style:background-color={ perc2color(count, options.minpoint, options.maxpoint) }
                >
                  { count }
                </div>
              { /each }
            </div>
          </div>
        { /if }
        { #if mappingRender }
          <div class="mapping">
            <div class="mapping-grid-container">
              { #each options.potMap as {
                name, mapped, ignore, waiting,
              } }
                <div>{ name }</div>
                <div>
                  <select
                    bind:value={ mapped }
                    { name }
                    on:change={ () => sendPrEvent('mapped') }
                    on:change={ doMapping }
                    on:mousedown|once={ () => { waiting = false; } }
                  >
                    { #if waiting }
                      <option>{ mapped }</option>
                    { :else }
                      { #each options.potMap as { name: innerName } }
                        <option selected={ mapped === innerName }>{ innerName }</option>
                      { /each }
                    { /if }
                  </select>
                </div>
                <div>
                  <input
                    bind:checked={ ignore }
                    on:change={ () => sendPrEvent('ignore') }
                    on:change={ doMapping }
                    on:click={ (e) => e.target.blur() }
                    title="Ignore"
                    type="checkbox"
                  >
                </div>
              { /each }
              <div></div>
              <div>
                <button
                  class="custombutton"
                  on:click={ () => sendPrEvent('ignore-all') }
                  on:click={ ignoreAll }
                  type="button"
                >
                  Ignore All
                </button>
                <button
                  class="custombutton"
                  on:click={ () => sendPrEvent('reset') }
                  on:click={ doReset }
                  type="button"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        { /if }
        { #if thresholdRender }
          <div class="thresholds">
            Min:
            <input
              bind:value={ options.minpoint }
              max="999"
              min="0"
              on:input={ () => sendPrEvent('minpoint') }
              on:input={ storeOptions }
              type="number"
            >
            Max:
            <input
              bind:value={ options.maxpoint }
              max="999"
              min="0"
              on:input={ () => sendPrEvent('maxpoint') }
              on:input={ storeOptions }
              type="number"
            >
          </div>
        { /if }
      </div>
    { :catch error }
      <p style="color: red">{ error.message }</p>
    { /await }
  </div>
</ModalTitled>

<style>
  .pot-report {
    color-scheme: light;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    justify-content: center;
    max-height: calc(100vh - 100px);
    row-gap: 10px;
    text-align: center;
    width: 640px;
  }
  .tab-ctrl {
    display: none;
  }
  label {
    background: #fece2f;
    color: #4c3000;
    margin-right: -1px;
    padding: .5em 1em;
  }
  input:checked + label {
    background: #ffa614;
    color: #381f00;
  }
  label:hover {
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
  .thresholds input {
    display: block;
    background-color: #f7ebd3;
    border-style: solid;
    border-width: 1px;
    border-color: #a9772c #f3d99d #f3d99d #a9772c;
    width: 4em;
  }
</style>
