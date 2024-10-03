<script>
  import VirtualList from 'svelte-virtual-list-ce';
  import daGuildLog from '../../_dataAccess/daGuildLog';
  import sendEvent from '../../analytics/sendEvent';
  import navigateTo from '../../common/navigateTo';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import { guildLogUrl } from '../../support/constants';
  import { subscribeOnce } from '../../support/pubsub';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import FilterHeader from './FilterHeader.svelte';
  import LogItem from './LogItem.svelte';
  import profiler from './profiler';

  export let visible = true;

  let checks = Array(11).fill(true);
  let chunkNo = 0;
  let displayLog = [];
  let enableLogColoring = null;
  let groupCombatItems = null;
  let hideNonPlayerGuildLogMessages = null;
  let lastCheckUtc = null;
  let liveLog = [];
  let prm = null;
  let progressLog = [];
  let nowUtc = null;
  let searchValue = '';

  function logEvent(type) {
    sendEvent('Guild Log', type);
  }

  function close() {
    logEvent('close');
    visible = false;
  }

  const addIndex = (obj, index) => ({ ...obj, index });
  const replacer = ({ msg }) =>
    msg.text.replace(
      /<link=a(\d)><\/link>/g,
      (match, p1) => msg.attachments[p1].data.name,
    );
  const decorate = (obj) => ({
    ...obj,
    fshType: profiler(obj.msg.text),
    new: enableLogColoring && obj.time > lastCheckUtc,
    old:
      enableLogColoring &&
      (nowUtc - obj.time) / 60 > 20 &&
      obj.time <= lastCheckUtc,
    searchable: replacer(obj).toLowerCase(),
  });
  const reverse = (a, b) => b.time - a.time;

  function updateDisplayLog() {
    displayLog = liveLog
      .filter(({ fshType }) => checks[fshType])
      .filter(
        ({ searchable }) =>
          searchValue === '' || searchable.includes(searchValue.toLowerCase()),
      )
      .map(addIndex);
    if (!displayLog.length) displayLog = [{ index: 0, msg: { text: '' } }];
  }

  function cbChange() {
    logEvent('cbChange');
    updateDisplayLog();
  }

  function selectAll() {
    logEvent('selectAll');
    updateDisplayLog();
  }

  function selectNone() {
    logEvent('selectNone');
    updateDisplayLog();
  }

  function oldGuildLog() {
    logEvent('oldGuildLog');
    navigateTo(guildLogUrl);
  }

  function clearSearch() {
    logEvent('clearSearch');
    searchValue = '';
  }

  function initVars() {
    progressLog = ['Loading...'];
    liveLog = [];
    displayLog = [];
    nowUtc = new Date().setUTCSeconds(0, 0) / 1000;
    lastCheckUtc = getValue('lastModalGuildLogCheck') ?? nowUtc;
    setValue('lastModalGuildLogCheck', nowUtc);
  }

  function getPrefs() {
    enableLogColoring = getValue('enableLogColoring');
    groupCombatItems = getValue('groupCombatItems');
    hideNonPlayerGuildLogMessages = getValue('hideNonPlayerGuildLogMessages');
  }

  function addToProgressLog(string) {
    progressLog = progressLog.concat(string);
  }

  function progress(status) {
    if (status) {
      addToProgressLog(status);
      return;
    }
    chunkNo += 1;
    addToProgressLog(`chunk ${chunkNo}`);
  }

  function initProgress() {
    chunkNo = 0;
    subscribeOnce('guildLog-progress', progress);
  }

  async function init() {
    initVars();
    getPrefs();
    initProgress();
    const builtLogs = await daGuildLog();
    if (!builtLogs) return;
    liveLog = builtLogs.toSorted(reverse).map(decorate);
    updateDisplayLog();
  }

  function refresh() {
    prm = init();
  }

  $: if (visible) {
    refresh();
  }

  $: updateDisplayLog(searchValue);
</script>

<ModalTitled {visible} on:close={close}>
  <svelte:fragment slot="title">Guild Log</svelte:fragment>
  <div class="content">
    <FilterHeader
      bind:checks
      bind:searchValue
      on:cbChange={cbChange}
      on:clearSearch={clearSearch}
      on:oldGuildLog={oldGuildLog}
      on:refresh={refresh}
      on:selectAll={selectAll}
      on:selectNone={selectNone}
    />
    <div class="row-container">
      <div class="innerColumnHeader">&nbsp;</div>
      <div class="innerColumnHeader">Date</div>
      <div class="innerColumnHeader">
        Message
        {#if hideNonPlayerGuildLogMessages}
          <span class="white">
            (Guild Log messages not involving self are dimmed!)
          </span>
        {/if}
      </div>
    </div>
    {#await prm}
      {#each progressLog as txt, index (index)}
        {txt}
        <br />
      {/each}
    {:then}
      <div class="vs">
        <VirtualList items={displayLog} let:item={logEntry}>
          <LogItem
            {groupCombatItems}
            {hideNonPlayerGuildLogMessages}
            {logEntry}
          />
        </VirtualList>
      </div>
    {:catch error}
      {error}
    {/await}
  </div>
</ModalTitled>

<style>
  .content {
    font-size: 12px;
    width: 800px;
  }
  .innerColumnHeader {
    width: auto;
  }
  .white {
    color: white;
  }
  .vs {
    --button-color: #383838;
    height: calc(100vh - 180px);
  }
  .row-container {
    display: grid;
    gap: 2px;
    grid-template-columns: 16px 116px 1fr;
  }
  .row-container > div {
    padding-bottom: 1px;
    padding-left: 2px;
    padding-top: 1px;
    margin-top: 2px;
  }
</style>
