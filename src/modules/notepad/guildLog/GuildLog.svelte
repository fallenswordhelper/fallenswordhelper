<script>
  import VirtualList from '../../common/VirtualList.svelte';
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

  let { visible = $bindable(true) } = $props();

  let checks = $state(Array(11).fill(true));
  let groupCombatItems = $state(null);
  let hideNonPlayerGuildLogMessages = $state(null);
  let liveLog = $state([]);
  let prm = $state(Promise.resolve());
  let progressLog = $state([]);
  let searchValue = $state('');

  const tmpDisplayLog = $derived(
    liveLog
      .filter(({ fshType }) => checks[fshType])
      .filter(
        ({ searchable }) =>
          searchValue === '' || searchable.includes(searchValue.toLowerCase()),
      )
      .map(addIndex),
  );

  const displayLog = $derived(
    tmpDisplayLog.length ? tmpDisplayLog : [{ index: 0, msg: { text: '' } }],
  );

  let chunkNo = 0;
  let enableLogColoring = null;
  let lastCheckUtc = null;
  let nowUtc = null;

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

  function logEvent(type) {
    sendEvent('Guild Log', type);
  }

  function close() {
    logEvent('close');
    visible = false;
  }

  function cbChange() {
    logEvent('cbChange');
  }

  function selectAll() {
    logEvent('selectAll');
  }

  function selectNone() {
    logEvent('selectNone');
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
    // eslint-disable-next-line svelte/prefer-svelte-reactivity
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
  }

  function refresh() {
    prm = init();
  }

  $effect(() => {
    if (visible) refresh();
  });
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Guild Log
  {/snippet}
  <div class="content">
    <FilterHeader
      bind:checks
      bind:searchValue
      {cbChange}
      {clearSearch}
      {oldGuildLog}
      {refresh}
      {selectAll}
      {selectNone}
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
        <VirtualList items={displayLog}>
          {#snippet children({ item: logEntry })}
            <LogItem
              {groupCombatItems}
              {hideNonPlayerGuildLogMessages}
              {logEntry}
            />
          {/snippet}
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
