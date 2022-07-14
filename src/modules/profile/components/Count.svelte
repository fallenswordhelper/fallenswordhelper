<script>
  import daComponents from '../../_dataAccess/daComponents';
  import objectToMap from '../../common/objectToMap';
  import uniq from '../../common/uniq';
  import { compStore, total } from './componentsStore';
  import CountRow from './CountRow.svelte';
  import getAsyncData from './getAsyncData';

  function rollupComponents(componentsJson) {
    const aggregate = new Map(uniq(componentsJson, 'b')
      .map((o) => [o.b, objectToMap({
        ...o,
        del: componentsJson.filter(({ b }) => b === o.b).map(({ a }) => a),
        delPending: false,
      })]));
    compStore.set(aggregate);
    return [...aggregate.keys()];
  }

  async function getComponents() {
    const components = await getAsyncData(daComponents);
    const rollup = rollupComponents(components.r);
    return { rollup, maxComp: components.h?.p[56]?.v };
  }
</script>

{#await getComponents()}
  <div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>
{:then {rollup, maxComp}}
  <div>
    <table class="fshTblCenter">
      <thead><tr><th colspan="3">Component Summary</th></tr></thead>
      <tbody>
        {#each rollup as itemId}
          <CountRow {itemId} on:delType/>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <td>Total:</td>
          <td colspan="2">{$total} / {maxComp}</td>
        </tr>
      </tfoot>
    </table>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
