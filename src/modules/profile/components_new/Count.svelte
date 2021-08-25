<script>
  import CountRow from './CountRow.svelte';
  import daComponents from '../../_dataAccess/daComponents';
  import daProfileLimits from '../../_dataAccess/daProfileLimits';
  import getAsyncData from './getAsyncData';
  import objectToMap from '../../common/objectToMap';
  import uniq from '../../common/uniq';
  import { compStore, total } from './componentsStore';

  function rollupComponents(componentsJson) {
    const aggregate = new Map(uniq(componentsJson, 'b')
      .map((o) => [o.b, objectToMap({
        ...o,
        del: componentsJson.filter(({ b }) => b === o.b).map(({ a }) => a),
        delPending: false,
      })]));
    // console.log('aggregate', aggregate);
    compStore.set(aggregate);
    // console.log('aggregate keys', [...aggregate.keys()]);
    return [...aggregate.keys()];
  }

  async function getComponents() {
    const components = await getAsyncData(daComponents);
    return rollupComponents(components.r);
  }

  function getPromise() {
    return Promise.all([getComponents(), getAsyncData(daProfileLimits)]);
  }
</script>

{#await getPromise()}
  <div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>
{:then [rollup, {r: profileLimits}]}
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
          <td colspan="2">{$total} / {profileLimits.max_components}</td>
        </tr>
      </tfoot>
    </table>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
