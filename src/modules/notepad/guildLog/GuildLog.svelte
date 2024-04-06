<script>
  import VirtualScroll from 'svelte-virtual-scroll-list';
  import sendEvent from '../../analytics/sendEvent';
  import log from '../../app/guild/log';
  import getHeightGuess from '../../common/getHeightGuess';
  import querySelectorArray from '../../common/querySelectorArray';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import FilterHeader from './FilterHeader.svelte';
  import LogItem from './LogItem.svelte';
  import profiler from './profiler';

  export let visible = true;

  let displayLog = [];
  let filters = null;
  let enableLogColoring = null;
  let groupCombatItems = null;
  let hideNonPlayerGuildLogMessages = null;
  let lastCheckUtc = null;
  let liveLog = [];
  let prm = null;
  let nowUtc = null;

  function logEvent(type) {
    sendEvent('Guild Log', type);
  }

  function close() {
    logEvent('close');
    visible = false;
  }

  const reverse = (a, b) => b.time - a.time;
  const keeps = () => Math.floor(getHeightGuess() / 12);
  const decorate = (obj) => ({
    ...obj,
    fshType: profiler(obj.msg.text),
    new: enableLogColoring && obj.time > lastCheckUtc,
    old: enableLogColoring && (nowUtc - obj.time) / 60 > 20 && obj.time <= lastCheckUtc,
  });

  function updateDisplayLog() {
    const test = querySelectorArray(':checked', filters).map(({ value }) => Number(value));
    displayLog = liveLog.filter(({ fshType }) => test.includes(fshType)).toSpliced(0, 0);
  }

  function cbChange() {
    logEvent('cbChange');
    updateDisplayLog();
  }

  function updateFilters(to) {
    querySelectorArray('[type="checkbox"]', filters).forEach((ctx) => { ctx.checked = to; });
    updateDisplayLog();
  }

  function selectAll() {
    logEvent('selectAll');
    updateFilters(true);
  }

  function selectNone() {
    logEvent('selectNone');
    updateFilters(false);
  }

  async function getGuildLog(logId = -1, direction = 1, acc = []) {
    const limit = 1000;
    const thisChunk = await log(logId, direction, limit);
    if (!thisChunk?.s) return;
    const newAcc = acc.concat(thisChunk.r.logs);
    if (thisChunk.r.logs.length !== limit) {
      return newAcc;
    }
    return getGuildLog(thisChunk.r.logs[0].id, 0, newAcc);
  }

  async function init() {
    liveLog = [];
    displayLog = [];
    enableLogColoring = getValue('enableLogColoring');
    groupCombatItems = getValue('groupCombatItems');
    hideNonPlayerGuildLogMessages = getValue('hideNonPlayerGuildLogMessages');
    nowUtc = new Date().setUTCSeconds(0, 0) / 1000;
    lastCheckUtc = getValue('lastModalGuildLogCheck') ?? nowUtc;
    setValue('lastModalGuildLogCheck', nowUtc);
    const builtLogs = await getGuildLog();
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
</script>

<ModalTitled { visible } on:close={ close }>
  <svelte:fragment slot="title">Guild Log</svelte:fragment>
  <div class="content">
    <FilterHeader
      bind:filters
      on:cbChange={ cbChange }
      on:refresh={ refresh }
      on:selectAll={ selectAll }
      on:selectNone={ selectNone }
    />
    <div class="row-container">
      <div class="innerColumnHeader">&nbsp;</div>
      <div class="innerColumnHeader">Date</div>
      <div class="innerColumnHeader">
        Message
        { #if hideNonPlayerGuildLogMessages }
          <span class="white">
            (Guild Log messages not involving self are dimmed!)
          </span>
        { /if }
      </div>
    </div>
    { #await prm }
      Loading...
    { :then}
      <div class="vs">
        <VirtualScroll
          data={ displayLog }
          estimateSize="17"
          key="id"
          keeps="{ keeps() }"
          let:data={ logEntry }
          let:index
        >
          <LogItem { groupCombatItems } { hideNonPlayerGuildLogMessages } { index } { logEntry } />
        </VirtualScroll>
      </div>
    { :catch error }
      { error }
    { /await }
  </div>
</ModalTitled>

<style>
  .content {
    --button-color: #383838;
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
