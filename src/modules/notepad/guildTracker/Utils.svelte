<script>
  import sendEvent from '../../analytics/sendEvent';
  import clickThis from '../../common/clickThis';
  import jsonStringify from '../../common/jsonStringify';
  import fileImport from './fileImport';
  import {
    createCsv,
    downloadFile,
    purgeByDate,
    purgeByUser,
    retired,
  } from './utils';

  let fileInput = $state(0);
  let overwrite = $state(0);
  let purgedate = $state('');
  let missing = $state([]);
  let selected = $state('');
  let disabled = $state(1);

  let dateAsTimestamp = $derived(purgedate && Date.parse(purgedate) / 1000);

  function exportJson() {
    sendEvent('Utils', 'exportJson');
    downloadFile(jsonStringify, 'application/json');
  }

  function exportCsv() {
    sendEvent('Utils', 'exportCsv');
    downloadFile(createCsv, 'text/csv');
  }

  function importFile() {
    sendEvent('Utils', 'importFile', overwrite);
    const [file] = fileInput.files;
    fileImport(file, overwrite);
  }

  function importButton() {
    sendEvent('Utils', 'importButton');
    clickThis(fileInput);
  }

  function datePurge() {
    sendEvent('Utils', 'datePurge');
    purgedate = '';
    purgeByDate(dateAsTimestamp);
  }

  async function init() {
    missing = await retired();
    if (missing.length) {
      disabled = 0;
      [selected] = missing;
    }
  }

  async function userPurge() {
    sendEvent('Utils', 'userPurge');
    disabled = 1;
    await purgeByUser(selected);
    missing = missing.filter((name) => name !== selected);
    if (missing.length) {
      disabled = 0;
      [selected] = missing;
    }
  }

  init();
</script>

<div>
  <button onclick={exportJson} type="button">Export JSON</button>
  <br /><br />
  <button onclick={exportCsv} type="button">Export CSV</button>
  <br /><br /><br />
  <input
    accept=".csv, .json, .txt"
    bind:this={fileInput}
    onchange={importFile}
    type="file"
  />
  <button onclick={importButton} type="button">Import</button>
  <label>
    <input
      bind:checked={overwrite}
      onchange={() => {
        sendEvent('Utils', 'overwriteToggle');
      }}
      type="checkbox"
    />
    Overwrite
  </label>
  (Warning: This can take a while on large files)<br /><br /><br />
  <button disabled={!purgedate} onclick={datePurge} type="button">Purge</button>
  data before
  <input
    bind:value={purgedate}
    onchange={() => {
      sendEvent('Utils', 'purgeDateChange');
    }}
    type="date"
  /><br /><br />
  <button onclick={userPurge} {disabled} type="button">Purge</button>
  username
  <select
    bind:value={selected}
    onchange={() => {
      sendEvent('Utils', 'handleChange');
    }}
    {disabled}
  >
    {#each missing as user, x (x)}
      <option value={user}>{user}</option>
    {/each}
  </select>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  div {
    color-scheme: light;
    min-width: 640px;
    padding: 4px;
  }
  button {
    background-color: #d6af6a;
    background-image: linear-gradient(#d9b677, #d2a85d);
    border-bottom-color: rgba(255, 255, 255, 0.2);
    border-left-color: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    border-right-color: rgba(255, 255, 255, 0.4);
    border-style: solid;
    border-top-color: rgba(255, 255, 255, 0.6);
    border-width: 1px;
    box-shadow: 0 0 3px rgb(0, 0, 0);
    color: #201703;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    margin-bottom: 2px;
    margin-right: 2px;
    padding: 1px 10px;
    position: relative;
  }
  button:hover {
    background-color: #f5e0ae;
    background-image: linear-gradient(#f6e2b5, #f4dda7);
  }
  button:active {
    top: 1px;
  }
  :disabled {
    background-color: #b8b8b8;
    background-image: none;
    pointer-events: none;
  }
  input[type='file'] {
    display: none;
  }
  input[type='date'],
  select {
    background-color: #f7ebd3;
    border-color: #a9772c #f3d99d #f3d99d #a9772c;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: #2f240f;
  }
  select {
    width: 100px;
  }
</style>
