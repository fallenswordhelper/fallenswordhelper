<script>
  import { onMount, untrack } from 'svelte';

  let {
    items = [],
    filter = () => true,
    filterKey = 0,
    getKey,
    debounceMs = 150,
    overscan = 5,
    estimatedHeight = 50,
    children,
  } = $props();

  // Height cache keyed by item identity, NOT array index
  // This persists across filter changes
  // Using plain Map intentionally - we don't want reactivity here
  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const heightCache = new Map();

  let viewport = $state();
  let viewportHeight = $state(0);
  let mounted = $state(false);
  let start = $state(0);
  let end = $state(0);
  let totalHeight = $state(0);

  // Offset cache - needs to be reactive for topPadding/bottomPadding to work
  let offsetCache = $state([]);

  // Debounced filtered items
  let filteredItems = $state([]);
  let filterTimer = null;
  let recalcScheduled = false;

  // Apply filter with debounce
  $effect(() => {
    // Capture reactive dependencies
    const currentItems = items;
    const currentFilter = filter;
    void filterKey; // Track this primitive to detect filter changes

    clearTimeout(filterTimer);
    filterTimer = setTimeout(() => {
      filteredItems = currentItems.filter(currentFilter);
    }, debounceMs);

    return () => clearTimeout(filterTimer);
  });

  // Compute visible items from filtered list
  const visibleItems = $derived(
    filteredItems.slice(start, end).map((item, i) => ({
      index: i + start,
      item,
      key: getKey(item),
    })),
  );

  const topPadding = $derived(start > 0 ? offsetCache[start] || 0 : 0);

  function measureHeight(node, { key, updateHeightFn }) {
    // Measure once on mount - heights don't change after render
    const height = node.offsetHeight;
    if (height > 0) {
      updateHeightFn(key, height);
    }
  }

  function updateHeightFn(key, height) {
    // Only store if not already measured (heights are fixed after render)
    if (!heightCache.has(key)) {
      heightCache.set(key, height);
      // Only recalc when not scrolling (keeps totalHeight stable during scroll)
      if (!isScrolling) {
        scheduleRecalc();
      }
    }
  }

  function getEstimatedHeight() {
    if (heightCache.size === 0) return estimatedHeight;
    let total = 0;
    for (const h of heightCache.values()) {
      total += h;
    }
    return total / heightCache.size;
  }

  function scheduleRecalc() {
    if (recalcScheduled) return;
    recalcScheduled = true;
    requestAnimationFrame(() => {
      recalcScheduled = false;
      recalculateOffsets();
    });
  }

  function recalculateOffsets() {
    // Use untrack to avoid creating reactive dependencies
    untrack(() => {
      const items = filteredItems;
      if (!items.length) {
        offsetCache = [];
        totalHeight = 0;
        return;
      }

      const avgHeight = getEstimatedHeight();
      const newOffsets = [];
      let offset = 0;

      for (let i = 0; i < items.length; i++) {
        newOffsets[i] = offset;
        const key = getKey(items[i]);
        const height = heightCache.get(key) || avgHeight;
        offset += height;
      }

      offsetCache = newOffsets;
      totalHeight = offset;
    });
  }

  function getHeightForIndex(index) {
    const avg = getEstimatedHeight();
    if (index < 0 || index >= filteredItems.length) return avg;
    const key = getKey(filteredItems[index]);
    return heightCache.get(key) || avg;
  }

  function findStartIndex(scrollTop) {
    if (!filteredItems.length || !offsetCache.length) return 0;

    let left = 0;
    let right = filteredItems.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      const offset = offsetCache[mid];
      const height = getHeightForIndex(mid);

      if (offset + height > scrollTop) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return Math.max(0, left - overscan);
  }

  function findEndIndex(startIdx, scrollTop) {
    if (!filteredItems.length) return 0;

    const viewportBottom = scrollTop + viewportHeight;

    for (let i = startIdx; i < filteredItems.length; i++) {
      const offset = offsetCache[i] || 0;
      if (offset > viewportBottom) {
        return Math.min(filteredItems.length, i + overscan);
      }
    }

    return filteredItems.length;
  }

  function updateVisibleRange(scrollTop) {
    const newStart = findStartIndex(scrollTop);
    const newEnd = findEndIndex(newStart, scrollTop);

    if (start !== newStart || end !== newEnd) {
      start = newStart;
      end = newEnd;
    }
  }

  let isScrolling = false;
  let scrollTimer;

  function handleScroll() {
    if (!mounted) return;

    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrolling = false;
    }, 150);

    updateVisibleRange(viewport.scrollTop);
  }

  onMount(() => {
    mounted = true;
  });

  // When filtered items change, recalculate offsets and reset view
  $effect(() => {
    const len = filteredItems.length;
    if (mounted) {
      // Recalculate offsets with new filtered list
      recalculateOffsets();
      // Reset to top
      if (viewport) {
        viewport.scrollTop = 0;
      }
      start = 0;
      end = Math.min(len, overscan * 4);
    }
  });

  // When viewport height changes, update visible range
  $effect(() => {
    if (viewportHeight > 0 && mounted && filteredItems.length > 0) {
      untrack(() => {
        updateVisibleRange(viewport?.scrollTop || 0);
      });
    }
  });
</script>

<virtual-scroll-viewport
  bind:this={viewport}
  bind:offsetHeight={viewportHeight}
  onscroll={handleScroll}
>
  <virtual-scroll-content style="height: {totalHeight}px;">
    <virtual-scroll-items style="transform: translateY({topPadding}px);">
      {#each visibleItems as { index, item, key } (key)}
        <virtual-scroll-item use:measureHeight={{ key, updateHeightFn }}>
          {#if children}
            {@render children({ item, index })}
          {:else}
            <div>Item {index}</div>
          {/if}
        </virtual-scroll-item>
      {/each}
    </virtual-scroll-items>
  </virtual-scroll-content>
</virtual-scroll-viewport>

<style>
  virtual-scroll-viewport {
    display: block;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    overflow-anchor: none;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    width: 100%;
  }

  virtual-scroll-content {
    display: block;
    position: relative;
    min-width: 100%;
  }

  virtual-scroll-items {
    display: block;
    will-change: transform;
  }

  virtual-scroll-item {
    display: block;
    contain: layout style paint;
  }
</style>
