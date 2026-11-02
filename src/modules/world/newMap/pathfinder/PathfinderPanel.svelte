<script>
  import getValue from '../../../system/getValue';
  import setValue from '../../../system/setValue';
  import { siteUrl } from './pathfinderData';
  import { closePanel, loadData, pf, setDest } from './pathfinder.svelte';
  import { liveWalk, startsOnTile, stepMain, stepShort } from './stepText';

  // the element the panel lives in (the one the Action List is in), so it scrolls with the map
  let { container } = $props();

  let query = $state(pf.dest);
  let mode = $state('name');
  let suggestions = $state([]);
  let active = $state(0);
  let panel = $state();
  let pos = $state(readPos());
  let bounds = $state(pageBounds());
  let drag = 0;

  function readPos() {
    try {
      const saved = JSON.parse(getValue('pathfinderPos'));
      if (typeof saved?.left === 'number') return saved;
    } catch {
      // nothing saved yet
    }
    return { left: container.clientWidth - 344, top: 150 };
  }

  // the panel may go anywhere on the page, like the Action List; positions are relative to the container
  function pageBounds() {
    const r = container.getBoundingClientRect();
    const x = r.left + window.scrollX - container.scrollLeft;
    const y = r.top + window.scrollY - container.scrollTop;
    const doc = document.documentElement;
    return {
      minLeft: -x,
      maxLeft: doc.scrollWidth - x,
      minTop: -y,
      maxTop: doc.scrollHeight - y,
    };
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  const left = $derived(
    clamp(
      pos.left,
      bounds.minLeft,
      bounds.maxLeft - (panel?.offsetWidth ?? 320),
    ),
  );
  const top = $derived(clamp(pos.top, bounds.minTop, bounds.maxTop - 60));

  function measure() {
    bounds = pageBounds();
  }

  // typing here must not walk the character: the game listens to the keyboard on the whole page
  function stopKeys(node) {
    const stop = (e) => e.stopPropagation();
    ['keydown', 'keyup', 'keypress'].forEach((type) =>
      node.addEventListener(type, stop),
    );
  }

  // "120" is one level, "100-120" (or "100 120") a range
  function byLevel(text) {
    const nums = text.match(/\d+/g);
    if (!nums) return [];
    const lo = Math.min(+nums[0], +nums[nums.length - 1]);
    const hi = Math.max(+nums[0], +nums[nums.length - 1]);
    return pf.router.realms
      .filter((a) => a.level >= lo && a.level <= hi)
      .sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
  }

  function suggest() {
    if (!pf.router || !query.trim()) suggestions = [];
    else if (mode === 'level') suggestions = byLevel(query);
    else suggestions = pf.router.search(query, 8);
    active = 0;
  }

  function setMode(next) {
    if (mode === next) return;
    mode = next;
    query = '';
    suggestions = [];
  }

  function pick(name) {
    query = name;
    suggestions = [];
    setDest(name);
  }

  function clear() {
    query = '';
    suggestions = [];
    setDest('');
  }

  function onKey(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (!suggestions.length) return;
      e.preventDefault();
      const step = e.key === 'ArrowDown' ? 1 : suggestions.length - 1;
      active = (active + step) % suggestions.length;
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (suggestions.length) pick(suggestions[active].name);
      else if (mode === 'name' && pf.router?.byName[query.trim()])
        pick(query.trim());
    } else if (e.key === 'Escape') {
      suggestions = [];
    }
  }

  function startDrag(e) {
    if (e.target.closest('button')) return;
    const r = panel.getBoundingClientRect();
    drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
    measure();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function moveDrag(e) {
    if (!drag) return;
    const origin = container.getBoundingClientRect();
    pos = {
      left: e.clientX - drag.dx - origin.left + container.scrollLeft,
      top: e.clientY - drag.dy - origin.top + container.scrollTop,
    };
  }

  function endDrag() {
    if (!drag) return;
    drag = 0;
    pos = { left, top };
    setValue('pathfinderPos', JSON.stringify(pos));
  }

  function retry(e) {
    e.preventDefault();
    loadData();
  }

  const to = $derived(pf.router?.byName[pf.dest]);
  const first = $derived(pf.route?.[0]);
  const walk = $derived(first ? liveWalk(first, pf.tile) : 0);
  const moves = $derived(
    first ? Math.max(0, Math.round(pf.route.total - first.walk + walk)) : 0,
  );
  const main = $derived(first ? stepMain(pf.router, first) : null);
</script>

<svelte:window
  onresize={() => {
    measure();
    pos = { left, top };
  }}
/>

<div
  id="fshPathfinder"
  bind:this={panel}
  style:left="{left}px"
  style:top="{top}px"
  hidden={!pf.open}
>
  <div
    class="fshPfHead"
    role="presentation"
    onpointerdown={startDrag}
    onpointermove={moveDrag}
    onpointerup={endDrag}
    onpointercancel={endDrag}
  >
    <span>Path finder</span>
    <button type="button" class="fshPfX" title="Close" onclick={closePanel}>
      &times;
    </button>
  </div>

  <div class="fshPfModes" role="group" aria-label="Search by">
    <button
      type="button"
      class:on={mode === 'name'}
      onclick={() => setMode('name')}
    >
      Name
    </button>
    <button
      type="button"
      class:on={mode === 'level'}
      onclick={() => setMode('level')}
    >
      Level
    </button>
  </div>

  <div class="fshPfSearch">
    <input
      type="text"
      inputmode={mode === 'level' ? 'numeric' : 'text'}
      placeholder={mode === 'level'
        ? 'Level, e.g. 120 or 100-120'
        : 'Where to? e.g. Ramdal Caves'}
      autocomplete="off"
      spellcheck="false"
      bind:value={query}
      use:stopKeys
      oninput={suggest}
      onfocus={suggest}
      onkeydown={onKey}
      onblur={() => setTimeout(() => (suggestions = []), 150)}
    />
    <button type="button" title="Clear the destination" onclick={clear}>
      Clear
    </button>
    {#if suggestions.length}
      <ul class="fshPfSugg" role="listbox">
        {#each suggestions as area, i (area.name)}
          <!-- mousedown, so it happens before the input loses focus -->
          <li
            role="option"
            aria-selected={i === active}
            class:on={i === active}
            onmousedown={(e) => {
              e.preventDefault();
              pick(area.name);
            }}
          >
            {area.name}
            <span>
              {area.kind === 'master' ? 'World map' : `Lv ${area.level}`}
            </span>
          </li>
        {/each}
      </ul>
    {/if}
  </div>

  <div class="fshPfBody">
    {#if !pf.dest}
      <div class="fshPfMsg">
        {mode === 'level'
          ? 'Type a level above, then pick one of its realms.'
          : 'Type an area name above to see the way there.'}
      </div>
    {:else if pf.loadError}
      <div class="fshPfMsg fshPfErr">
        {pf.loadError}<br />
        <a href="#retry" onclick={retry}>Try again</a>
      </div>
    {:else if !pf.router}
      <div class="fshPfMsg">Loading the map data…</div>
    {:else if !to}
      <div class="fshPfMsg fshPfErr">“{pf.dest}” is not in the map data.</div>
    {:else}
      <div class="fshPfDest">
        Going to <b>{to.name}</b> <span>Lv {to.level}</span>
      </div>
      {#if !pf.here}
        <div class="fshPfMsg">
          Your current area is not in the map data{pf.hereName
            ? ` (${pf.hereName})`
            : ''}.
        </div>
      {:else if pf.here.name === to.name}
        <div class="fshPfDone">You have arrived.</div>
      {:else if pf.planning}
        <div class="fshPfMsg">Working out the way…</div>
      {:else if !first}
        <div class="fshPfMsg fshPfErr">
          No known way from <b>{pf.here.name}</b> in this data.
        </div>
      {:else}
        <div class="fshPfCount">
          <b>{pf.route.length}</b>
          step{pf.route.length === 1 ? '' : 's'} · about <b>{moves}</b> moves
        </div>
        <div class="fshPfNext">
          <div class="fshPfIn">Next, in {first.from}</div>
          <div class="fshPfBig">{main.main}</div>
          {#if main.sub}<div class="fshPfSub">{main.sub}</div>{/if}
          {#if first.edge.note}
            <div class="fshPfNote">{first.edge.note}</div>
          {/if}
          {#if startsOnTile(first)}
            {#if walk === 0}
              <div class="fshPfAway fshPfHere">You are on the tile</div>
            {:else}
              <div class="fshPfAway">
                {walk} move{walk === 1 ? '' : 's'} away
              </div>
            {/if}
          {/if}
        </div>
        {#if pf.route.length > 1}
          <ol class="fshPfRest" start="2">
            {#each pf.route.slice(1) as step, i (i)}
              <li>
                <span class="fshPfFrom">{step.from}</span>
                {stepShort(pf.router, step)}
              </li>
            {/each}
          </ol>
        {/if}
      {/if}
    {/if}
  </div>

  <div class="fshPfFoot">
    <a href={siteUrl} target="_blank" rel="noopener">
      Fallen Sword Path Finder website ↗
    </a>
  </div>
</div>
