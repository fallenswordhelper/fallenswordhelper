<script module>
  let context = '';
</script>

<script>
  import sendEvent from '../../analytics/sendEvent';
  import alpha from '../../common/alpha';
  import entries from '../../common/entries';
  import formatUtcDateTime from '../../common/formatUtcDateTime';
  import fromEntries from '../../common/fromEntries';
  import isNull from '../../common/isNull';
  import isUndefined from '../../common/isUndefined';
  import keys from '../../common/keys';
  import VirtualScroll from '../../common/VirtualScroll.svelte';
  import { act, cur, gxp, lvl, max, utc, vl } from './indexConstants';
  import { getActivity } from './utils';

  let activity = $state({});
  let members = $state([]);
  let selected = $state('');

  const items = $derived(activity?.[selected] ?? []);

  const revSort = (data) =>
    fromEntries(
      entries(data).map(([key, val]) => [
        key,
        [...val].sort((a, b) => b[utc] - a[utc]),
      ]),
    );

  async function init() {
    const raw = await getActivity();
    activity = revSort(raw.members);
    members = keys(activity).sort(alpha);
    if (context) selected = context;
    else [selected] = members;
  }

  function handleChange() {
    sendEvent('Guild Tracker', 'handleChange');
    context = selected;
  }

  function toText(val) {
    if (isUndefined(val)) return '#DEF';
    if (isNull(val)) return 'null';
    return val.toLocaleString();
  }
</script>

<div class="fsh-guild-tracker">
  {#await init() then}
    <div class="grid-row head">
      <div>Date</div>
      <div>
        Member
        <select bind:value={selected} onchange={handleChange}>
          {#each members as member, x (x)}
            <option value={member}>{member}</option>
          {/each}
        </select>
      </div>
      <div>Level</div>
      <div>VL</div>
      <div>Stam</div>
      <div>Max Stam</div>
      <div>Stam %</div>
      <div>Last Activity (Days)</div>
      <div>GXP</div>
    </div>
    <div class="items">
      <VirtualScroll {items}>
        {#snippet children({ item: stuff })}
          <div class="grid-row">
            <div>{formatUtcDateTime(new Date(stuff[utc] * 1000))}</div>
            <div>{selected}</div>
            <div>{toText(stuff[lvl])}</div>
            <div>{toText(stuff[vl])}</div>
            <div>{toText(stuff[cur])}</div>
            <div>{toText(stuff[max])}</div>
            <div>{Math.floor((stuff[cur] / stuff[max]) * 100)}</div>
            <div>{stuff[act]}</div>
            <div>{toText(stuff[gxp])}</div>
          </div>
        {/snippet}
      </VirtualScroll>
    </div>
  {/await}
</div>

<style>
  .fsh-guild-tracker {
    --date: 128px;
    --member: 80px;
    --level: 40px;
    --vl: 40px;
    --stam: 60px;
    --max-stam: 60px;
    --perc: 28px;
    --last-act: 40px;
    --gxp: 120px;
    --col-gap: 2px;
    --grid-width: calc(
      var(--date) + var(--member) + var(--level) + var(--vl) + var(--stam) +
        var(--max-stam) + var(--perc) + var(--last-act) + var(--gxp) +
        (var(--col-gap) * 8)
    );
    --scroll: 20px;
    box-sizing: border-box;
    min-width: 640px;
    padding-bottom: 4px;
    padding-left: 4px;
  }
  .grid-row {
    column-gap: var(--col-gap);
    display: grid;
    grid-template-columns:
      var(--date)
      var(--member)
      var(--level)
      var(--vl)
      var(--stam)
      var(--max-stam)
      var(--perc)
      var(--last-act)
      var(--gxp);
    width: var(--grid-width);
  }
  .head {
    background-color: #cd9e4b;
    padding-right: var(--scroll);
    place-items: center;
    text-align: center;
  }
  select {
    background-color: #f7ebd3;
    border-color: #a9772c #f3d99d #f3d99d #a9772c;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: #2f240f;
    width: 80px;
  }
  .items {
    height: calc(100vh - 140px);
    overflow: hidden;
    width: calc(var(--grid-width) + var(--scroll));
  }
  :global(.modal-content:has(.fsh-guild-tracker)) {
    scrollbar-gutter: auto;
  }
  .grid-row div:nth-child(3),
  .grid-row div:nth-child(4),
  .grid-row div:nth-child(5),
  .grid-row div:nth-child(6),
  .grid-row div:nth-child(7),
  .grid-row div:nth-child(8),
  .grid-row div:nth-child(9) {
    text-align: right;
  }
</style>
