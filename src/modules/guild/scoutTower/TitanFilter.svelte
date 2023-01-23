<script>
  import sendEvent from '../../analytics/sendEvent';
  import alpha from '../../common/alpha';
  import arrayFrom from '../../common/arrayFrom';
  import closestTable from '../../common/closestTable';
  import entries from '../../common/entries';
  import fromEntries from '../../common/fromEntries';
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import toggleForce from '../../common/toggleForce';
  import trimTitanName from '../../common/trimTitanName';
  import { get, set } from '../../system/idb';

  export let theTitans;
  export let titanRows;

  const prefName = 'fsh_titanFilter';
  let current = true;
  let history = true;
  let securable = false;
  let titans = [];

  const byName = ([a], [b]) => alpha(a, b);
  const getPrefs = () => get(prefName);
  const setPrefs = () => set(prefName, {
    current,
    history,
    securable,
    titans,
  });
  const titanPref = ({ titanName }) => titans.find(([n]) => n === titanName)[1];
  const mergePrefs = () => entries({
    ...fromEntries(entries(theTitans).map(([n]) => [n, true])),
    ...fromEntries(titans.map(([n, o]) => [trimTitanName(n), o])),
  }).sort(byName);
  const isCurrent = (ctx) => ctx.active && current;
  const isHistory = (ctx) => !ctx.active && history;
  const isSecurable = (ctx) => ctx.securable || !securable;

  function testVis(ctx) {
    return (isCurrent(ctx) || isHistory(ctx)) && titanPref(ctx) && isSecurable(ctx);
  }

  function updateVis([ctx, newVis]) {
    const allRows = arrayFrom(closestTable(ctx.tr).rows);
    const thisIndex = ctx.tr.rowIndex;
    const targets = allRows.slice(thisIndex, thisIndex + 6);
    targets.forEach((r) => toggleForce(r, !newVis));
    ctx.visible = newVis;
  }

  function doVisibility() {
    titanRows
      .map((ctx) => [ctx, testVis(ctx)])
      .filter(([ctx, newVis]) => ctx.visible !== newVis)
      .forEach(updateVis);
  }

  async function buildTitanList() {
    const oldOptions = await getPrefs();
    if (oldOptions) {
      ({
        current,
        history,
        securable,
        titans,
      } = oldOptions);
    }
    titans = mergePrefs();
    doVisibility();
  }

  function toggleVisibility() {
    setPrefs();
    doVisibility();
  }

  function toggleCurrent() {
    sendEvent('TitanFilter', 'toggleCurrent');
    toggleVisibility();
  }

  function toggleHistory() {
    sendEvent('TitanFilter', 'toggleHistory');
    toggleVisibility();
  }

  function toggleSecurable() {
    sendEvent('TitanFilter', 'toggleSecurable');
    toggleVisibility();
  }

  function toggleTitan() {
    sendEvent('TitanFilter', 'toggleTitan');
    toggleVisibility();
  }

  function selectAll() {
    sendEvent('TitanFilter', 'selectAll');
    titans = titans.map(([n]) => [n, true]);
    toggleVisibility();
  }

  function selectNone() {
    sendEvent('TitanFilter', 'selectNone');
    titans = titans.map(([n]) => [n, false]);
    toggleVisibility();
  }
</script>

<table>
  <tbody>
    <tr><td class="header" colspan="3"/></tr>
    <tr>
      <td colspan="3">
        <label>
          <input bind:checked={current} on:change={toggleCurrent} type="checkbox">
          Current
        </label>
        <label>
          <input bind:checked={history} on:change={toggleHistory} type="checkbox">
          History
        </label>
        <label>
          <input bind:checked={securable} on:change={toggleSecurable} type="checkbox">
          Securable
        </label>
      </td>
    </tr>
    <tr><td class="header" colspan="3"/></tr>
    <tr>
      <td colspan="3">
        {#await buildTitanList() then}
          <div id="titan-list">
          {#each titans as [name, flag]}
            <label>
              <input bind:checked={flag} on:change={toggleTitan} type="checkbox">
              {name}
            </label>&ensp;
          {/each}
          </div>
          <div>
            <LinkButtonBracketed on:click={selectAll}>Select All</LinkButtonBracketed>
            <LinkButtonBracketed on:click={selectNone}>Select None</LinkButtonBracketed>
          </div>
        {/await}
      </td>
    </tr>
    <tr><td class="header" colspan="3"/></tr>
  </tbody>
</table>

<style>
  table {
    width: 500px;
    margin: auto;
    margin-top: 10px;
  }
  td:not(.header) {
    text-align: center;
    padding: 4px 0;
  }
  .header {
    height: 1px;
  }
  label {
    white-space: nowrap;
  }
  div {
    margin-top: 4px;
    --button-margin: auto 2px;
  }
  #titan-list {
    column-count: 3;
  }
  #titan-list > label {
    display: block;
    text-align: left;
  }
</style>
