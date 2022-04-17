<script>
  import LinkButtonBracketed from '../../common/LinkButtonBracketed.svelte';
  import alpha from '../../common/alpha';
  import arrayFrom from '../../common/arrayFrom';
  import closestTable from '../../common/closestTable';
  import entries from '../../common/entries';
  import fromEntries from '../../common/fromEntries';
  import sendEvent from '../../analytics/sendEvent';
  import toggleForce from '../../common/toggleForce';
  import trimTitanName from '../../common/trimTitanName';
  import { get, set } from '../../system/idb';

  export let theTitans;
  export let titanRows;

  const prefName = 'fsh_titanFilter';
  let current = true;
  let history = true;
  let titans = [];

  const byName = ([a], [b]) => alpha(a, b);
  const getPrefs = () => get(prefName);
  const setPrefs = () => set(prefName, { current, history, titans });
  const titanPref = ({ titanName }) => titans.find(([n]) => n === titanName)[1];
  const mergePrefs = () => entries({
    ...fromEntries(entries(theTitans).map(([n]) => [n, true])),
    ...fromEntries(titans.map(([n, o]) => [trimTitanName(n), o])),
  }).sort(byName);

  function testVis(ctx) {
    return !(((ctx.active && current) || (!ctx.active && history)) && titanPref(ctx));
  }

  function hideRow([ctx, hide]) {
    const allRows = arrayFrom(closestTable(ctx.tr).rows);
    const thisIndex = ctx.tr.rowIndex;
    const targets = allRows.slice(thisIndex, thisIndex + 6);
    targets.forEach((r) => toggleForce(r, hide));
    ctx.visible = !hide;
  }

  function doVisibility() {
    titanRows
      .map((ctx) => [ctx, testVis(ctx)])
      .filter(([ctx, hide]) => ctx.visible === hide)
      .forEach(hideRow);
  }

  async function buildTitanList() {
    const oldOptions = await getPrefs();
    if (oldOptions) ({ current, history, titans } = oldOptions);
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
      </td>
    </tr>
    <tr><td class="header" colspan="3"/></tr>
    <tr>
      <td colspan="3">
        {#await buildTitanList() then}
          {#each titans as [name, flag]}
            <label>
              <input bind:checked={flag} on:change={toggleTitan} type="checkbox">
              {name}
            </label>&ensp;
          {/each}
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
</style>
