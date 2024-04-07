<script>
  import VirtualList from 'svelte-virtual-list-ce';
  import sendEvent from '../../analytics/sendEvent';
  import log from '../../app/guild/log';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import FilterHeader from './FilterHeader.svelte';
  import LogItem from './LogItem.svelte';
  import profiler from './profiler';

  export let visible = true;

  let checks = Array(11).fill(true);
  let displayLog = [];
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

  const addIndex = (obj, index) => ({ ...obj, index });
  const decorate = (obj) => ({
    ...obj,
    fshType: profiler(obj.msg.text),
    new: enableLogColoring && obj.time > lastCheckUtc,
    old: enableLogColoring && (nowUtc - obj.time) / 60 > 20 && obj.time <= lastCheckUtc,
  });
  const reverse = (a, b) => b.time - a.time;

  function updateDisplayLog() {
    displayLog = liveLog.filter(({ fshType }) => checks[fshType]).map(addIndex);
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
      bind:checks
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
        <VirtualList items={ displayLog } let:item={ logEntry }>
          <LogItem { groupCombatItems } { hideNonPlayerGuildLogMessages } { logEntry } />
        </VirtualList>
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
