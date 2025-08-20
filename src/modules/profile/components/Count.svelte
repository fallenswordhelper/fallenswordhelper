<script>
  import { SvelteMap } from 'svelte/reactivity';
  import daComponents from '../../_dataAccess/daComponents';
  import uniq from '../../common/uniq';
  import { compStore, total } from './componentsStore';
  import CountRow from './CountRow.svelte';
  import getAsyncData from './getAsyncData';
  import entries from '../../common/entries';
  const { dispatchDelType } = $props();
  import getVcode from './getVcode';

  function objectToMap(obj) {
    return new SvelteMap(entries(obj));
  }

  function rollupComponents(componentsJson) {
    const aggregate = new SvelteMap(
      uniq(componentsJson, 'b').map((o) => [
        o.b,
        objectToMap({
          ...o,
          del: componentsJson.filter(({ b }) => b === o.b).map(({ a }) => a),
          delPending: false,
        }),
      ]),
    );
    compStore.set(aggregate);
    return [...aggregate.keys()];
  }

  async function getComponents() {
    const response = await getAsyncData(daComponents);
    const maxComp = response.h?.p.find(({ k }) => k === 56)?.v;
    const components = await response.r.reduce(async (c, d) => {
      const accumulator = await c;
      const v = await getVcode(d.b);
      accumulator.push({...d, v});
      return accumulator;
    }, Promise.resolve([]));
    const rollup = rollupComponents(components);
    return { rollup, maxComp };
  }
</script>

{#await getComponents()}
  <div class="compSumSpin"><span class="fshSpinner fshSpinner12"></span></div>
{:then { rollup, maxComp }}
  <div>
    <table class="fshTblCenter">
      <thead>
        <tr><th colspan="3">Component Summary</th></tr>
        <tr>
          <th>Total:</th>
          <th colspan="2">{$total} / {maxComp}</th>
        </tr>
      </thead>
      <tbody>
        {#each rollup as itemId (itemId)}
          <CountRow {dispatchDelType} {itemId} />
        {/each}
      </tbody>
    </table>
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
