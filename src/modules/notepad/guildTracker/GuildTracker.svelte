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
  import { act, cur, gxp, lvl, max, utc, vl } from './indexConstants';
  import { getActivity } from './utils';

  let activity = $state({});
  let members = $state([]);
  let selected = $state('');

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

<div class="main">
  {#await init() then}
    <div class="grid head">
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
    <div class="grid items">
      {#each activity?.[selected] ?? [] as stuff, x (x)}
        <div>{formatUtcDateTime(new Date(stuff[utc] * 1000))}</div>
        <div>{selected}</div>
        <div>{toText(stuff[lvl])}</div>
        <div>{toText(stuff[vl])}</div>
        <div>{toText(stuff[cur])}</div>
        <div>{toText(stuff[max])}</div>
        <div>{Math.floor((stuff[cur] / stuff[max]) * 100)}</div>
        <div>{stuff[act]}</div>
        <div>{toText(stuff[gxp])}</div>
      {/each}
    </div>
  {/await}
</div>

<style>
  .main {
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
  .grid {
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
    max-height: calc(100vh - 140px);
    overflow-y: auto;
    width: calc(var(--grid-width) + var(--scroll));
  }
  .items div {
    overflow-x: hidden;
  }
  .items div:nth-child(9n-6),
  .items div:nth-child(9n-5),
  .items div:nth-child(9n-4),
  .items div:nth-child(9n-3),
  .items div:nth-child(9n-2),
  .items div:nth-child(9n-1),
  .items div:nth-child(9n) {
    text-align: right;
  }
</style>
