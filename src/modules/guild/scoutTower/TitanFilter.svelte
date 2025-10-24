<script>
  import sendEvent from '../../analytics/sendEvent';
  import alpha from '../../common/alpha';
  import arrayFrom from '../../common/arrayFrom';
  import closestTable from '../../common/closestTable';
  import entries from '../../common/entries';
  import fromEntries from '../../common/fromEntries';
  import LinkBtnBracketed from '../../common/LinkBtnBracketed.svelte';
  import toggleForce from '../../common/toggleForce';
  import trimTitanName from '../../common/trimTitanName';
  import getUrlParameter from '../../system/getUrlParameter';
  import { get, set } from '../../system/idb';

  let { theTitans, titanRows } = $props();

  const prefName = 'fsh_titanFilter';
  let securable = $state(false);
  let titans = $state([]);

  const byName = ([a], [b]) => alpha(a, b);
  const getPrefs = () => get(prefName);
  const setPrefs = () =>
    set(prefName, {
      securable: $state.snapshot(securable),
      titans: $state.snapshot(titans),
    });
  const titanPref = ({ titanName }) => titans.find(([n]) => n === titanName)[1];
  const mergePrefs = () =>
    entries({
      ...fromEntries(entries(theTitans).map(([n]) => [n, true])),
      ...fromEntries(titans.map(([n, o]) => [trimTitanName(n), o])),
    }).sort(byName);
  const isSecurable = (ctx) => ctx.securable || !securable;

  function testVis(ctx) {
    return titanPref(ctx) && isSecurable(ctx);
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
      ({ securable, titans } = oldOptions);
    }
    titans = mergePrefs();
    doVisibility();
  }

  function toggleVisibility() {
    setPrefs();
    doVisibility();
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
    {#if getUrlParameter('tab') !== 'completed'}
      <tr><td class="header" colspan="3"></td></tr>
      <tr>
        <td colspan="3">
          <label>
            <input
              bind:checked={securable}
              onchange={toggleSecurable}
              type="checkbox"
            />
            Securable
          </label>
        </td>
      </tr>
    {/if}
    <tr><td class="header" colspan="3"></td></tr>
    <tr>
      <td colspan="3">
        {#await buildTitanList() then}
          <div id="titan-list">
            {#each titans as [name], i (i)}
              <label class="titan-label">
                <input
                  bind:checked={titans[i][1]}
                  onchange={toggleTitan}
                  type="checkbox"
                />
                {name}
              </label>
            {/each}
          </div>
          <div>
            <LinkBtnBracketed onclick={selectAll}>Select All</LinkBtnBracketed>
            <LinkBtnBracketed onclick={selectNone}>
              Select None
            </LinkBtnBracketed>
          </div>
        {/await}
      </td>
    </tr>
    <tr><td class="header" colspan="3"></td></tr>
  </tbody>
</table>

<style>
  table {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 500px;
  }
  td:not(.header) {
    padding: 4px 0;
    text-align: center;
  }
  .header {
    height: 1px;
  }
  label {
    white-space: nowrap;
  }
  div {
    --button-margin: auto 2px;
    margin-top: 4px;
  }
  #titan-list {
    column-count: 3;
  }
  .titan-label {
    display: block;
    text-align: left;
  }
</style>
