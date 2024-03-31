<script>
  import VirtualScroll from 'svelte-virtual-scroll-list';
  import sendEvent from '../../analytics/sendEvent';
  import log from '../../app/guild/log';
  import formatUtcTimestamp from '../../common/formatUtcTimestamp';
  import getHeightGuess from '../../common/getHeightGuess';
  import LinkButton from '../../common/LinkButton.svelte';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import navigateTo from '../../common/navigateTo';
  import numberIsNaN from '../../common/numberIsNaN';
  import openQuickBuffById from '../../common/openQuickBuffById';
  import querySelectorArray from '../../common/querySelectorArray';
  import getCombat from '../../logs/playerLogWidgets/getCombat';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import {
    cmdUrl,
    guildViewUrl,
    playerIdUrl,
    secureUrl,
    tradeUrl,
  } from '../../support/constants';
  import getValue from '../../system/getValue';
  import setValue from '../../system/setValue';
  import { cdn } from '../../system/system';
  import profiler from './profiler';

  export let visible = true;
  let displayLog = [];
  let filters = null;
  let enableLogColoring = null;
  let groupCombatItems = null;
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
  const empty = (txt) => txt;
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

  function reply(data) {
    logEvent('reply');
    window.openQuickMsgDialog(data.name);
  }

  function buff(data) {
    logEvent('buff');
    openQuickBuffById(data.id);
  }

  function send(data) {
    logEvent('send');
    navigateTo(`${tradeUrl}${data.name}`);
  }

  function trade(data) {
    logEvent('trade');
    navigateTo(`${secureUrl}${data.name}`);
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
    <div class="filter-header">
      <div bind:this={ filters } class="filters">
        <div class="front">
          <span>Filters:</span>
        </div>
        <div>
          <label>
            Potions:
            <input checked on:change={ cbChange } type="checkbox" value=1>
          </label>
        </div>
        <div>
          <label>
            Store/Recalls:
            <input checked on:change={ cbChange } type="checkbox" value=2>
          </label>
        </div>
        <div>
          <label>
            Relics:
            <input checked on:change={ cbChange } type="checkbox" value=4>
          </label>
        </div>
        <div>
          <label>
            Mercenaries:
            <input checked on:change={ cbChange } type="checkbox" value=5>
          </label>
        </div>
        <div>
          <label>
            Group Combats:
            <input checked on:change={ cbChange } type="checkbox" value=6>
          </label>
        </div>
        <div></div>
        <div>
          <label>
            Donations:
            <input checked on:change={ cbChange } type="checkbox" value=7>
          </label>
        </div>
        <div>
          <label>
            Rankings:
            <input checked on:change={ cbChange } type="checkbox" value=8>
          </label>
        </div>
        <div>
          <label>
            GvGs:
            <input checked on:change={ cbChange } type="checkbox" value=9>
          </label>
        </div>
        <div>
          <label>
            Tag/UnTags:
            <input checked on:change={ cbChange } type="checkbox" value=3>
          </label>
        </div>
        <div>
          <label>
            Titans:
            <input checked on:change={ cbChange } type="checkbox" value=10>
          </label>
        </div>
        <div>
          <label>
            Other:
            <input checked on:change={ cbChange } type="checkbox" value=0>
          </label>
        </div>
      </div>
      <div class="buttons">
        <div><LinkButtonBracketed on:click={ selectAll }>Select All</LinkButtonBracketed></div>
        <div><LinkButtonBracketed on:click={ selectNone }>Select None</LinkButtonBracketed></div>
        <div><LinkButtonBracketed on:click={ refresh }>Refresh</LinkButtonBracketed></div>
      </div>
    </div>
    <div class="row-container">
      <div class="innerColumnHeader">&nbsp;</div>
      <div class="innerColumnHeader">Date</div>
      <div class="innerColumnHeader">Message</div>
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
        >
          <div class="row-container">
            <div
              class:old={ logEntry.old }
              class:new={ logEntry.new }
            >
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <div
              class:old={ logEntry.old }
              class:new={ logEntry.new }
            >
              { formatUtcTimestamp(logEntry.time) }
            </div>
            <div
              class:old={ logEntry.old }
              class:new={ logEntry.new }
            >
              { #each logEntry.msg.text.split(/<link=a(\d)><\/link>/).filter(empty) as chunk }
                { #if chunk.length === 1 && !numberIsNaN(Number(chunk)) }
                  { #if logEntry.msg.attachments[chunk].type === 0 }
                    <a href="{ playerIdUrl }{ logEntry.msg.attachments[chunk].data.id }">
                      { logEntry.msg.attachments[chunk].data.name }
                    </a>
                  { /if }
                  { #if logEntry.msg.attachments[chunk].type === 1 }
                    [
                    <a href="{ guildViewUrl }{ logEntry.msg.attachments[chunk].data.id }">
                      <img
                        src="{ cdn }guilds/{ logEntry.msg.attachments[chunk].data.id }_mini.png"
                        alt={ logEntry.msg.attachments[chunk].data.name }
                      >
                      { logEntry.msg.attachments[chunk].data.name }
                    </a>
                    ]
                  { /if }
                { :else }
                  { chunk }
                { /if }
              { /each }
              { #if logEntry.type === 17 && logEntry.msg.attachments.length }
                &nbsp;&nbsp;[
                <a href="{ cmdUrl }combat&subcmd=view&combat_id={
                  logEntry.msg.attachments[0].data
                }">
                  View Combat
                </a>
                ]
                { #if groupCombatItems && logEntry.msg.text.includes('victorious') }
                  { #await getCombat(logEntry.time, logEntry.msg.attachments[0].data)
                    then json }
                    { #if json?.r?.combat?.items?.[0]?.n }
                      <div>
                        <a href="{ playerIdUrl }{ json.r.combat.attacker.group.players[0].id }"
                        >{ json.r.combat.attacker.group.players[0].name }</a>'s
                        group looted the item
                        '<span class="fshGreen">{ json?.r?.combat?.items?.[0]?.n }</span>'
                      </div>
                    { /if }
                  { /await }
                { /if }
              { /if }
              { #each logEntry.msg.attachments.filter(({ type }) => type === 0) as { data } }
                <span class="action-buttons">
                  [
                  <LinkButton on:click={ () => reply(data) }>Reply</LinkButton>
                  |
                  <LinkButton on:click={ () => buff(data) }>Buff</LinkButton>
                  |
                  <LinkButton on:click={ () => send(data) }>Send</LinkButton>
                  |
                  <LinkButton on:click={ () => trade(data) }>Trade</LinkButton>
                  ]
                </span>
              { /each }
            </div>
          </div>
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
  .filter-header {
    margin-bottom: 4px;
    margin-left: 20px;
    margin-right: 20px;
  }
  .filters {
    align-items: center;
    color-scheme: light;
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
  .buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-top: 8px;
  }
  .innerColumnHeader {
    width: auto;
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
  .old {
    background-color: #CD9E4B;
  }
  .new {
    background-color: #F5F298;
  }
  a {
    color: #383838;
  }
  img {
    display: inline-block;
    height: 12px;
    margin-right: 5px;
    vertical-align: middle;
    width: 12px;
  }
  .action-buttons {
    margin-left: 4px;
    white-space: nowrap;
  }
</style>
