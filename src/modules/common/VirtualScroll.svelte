<script>
  import { onMount } from 'svelte';

  let {
    items = [],
    overscan = 5,
    scrollToIndex = $bindable(),
    children,
  } = $props();

  function measureHeight(node, { index, updateItemHeight }) {
    function measure() {
      const height = node.offsetHeight;
      if (height > 0) {
        updateItemHeight(index, height);
      }
    }

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(node);

    measure();

    return {
      destroy() {
        resizeObserver.disconnect();
      },
    };
  }

  let start = $state(0);
  let end = $state(0);

  let viewport = $state();
  let viewportHeight = $state(0);
  let mounted = $state(false);
  let itemHeights = [];
  let offsetCache = [];
  let estimatedItemHeight = 50;
  let totalHeight = $state(0);
  let recalcScheduled = false;
  let scrollScheduled = false;
  let isScrolling = false;
  let scrollTimer;

  const visibleItems = $derived(
    items.slice(start, end).map((item, i) => ({
      index: i + start,
      item,
    })),
  );

  const topPadding = $derived(getItemOffsetTop(start));
  const bottomPadding = $derived(
    end >= items.length ? 0 : totalHeight - getItemOffsetTop(end),
  );

  function getItemOffsetTop(index) {
    if (!itemHeights.length) return index * estimatedItemHeight;
    if (offsetCache[index] !== undefined) return offsetCache[index];

    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += itemHeights[i] || estimatedItemHeight;
    }
    return offset;
  }

  function updateItemHeight(index, height) {
    if (itemHeights[index] !== height) {
      itemHeights[index] = height;
      if (!recalcScheduled && !isScrolling) {
        recalcScheduled = true;
        requestAnimationFrame(() => {
          recalcScheduled = false;
          recalculateHeights();
        });
      }
    }
  }

  function recalculateHeights() {
    let knownCount = 0;
    let knownSum = 0;

    offsetCache = [];
    totalHeight = 0;

    for (let i = 0; i < items.length; i++) {
      offsetCache[i] = totalHeight;
      const height = itemHeights[i];
      if (height > 0) {
        knownCount++;
        knownSum += height;
        totalHeight += height;
      } else {
        totalHeight += estimatedItemHeight;
      }
    }

    if (knownCount > 0) {
      estimatedItemHeight = knownSum / knownCount;
    }

    if (mounted && viewportHeight > 0) {
      const scrollTop = viewport?.scrollTop || 0;
      const newStart = findStartIndex(scrollTop);
      const newEnd = findEndIndex(newStart, scrollTop, viewportHeight);
      start = newStart;
      end = newEnd;
    }
  }

  function findStartIndex(scrollTop) {
    if (!mounted || !items.length) return 0;

    if (offsetCache.length) {
      let left = 0;
      let right = items.length - 1;

      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const offset = offsetCache[mid];
        const height = itemHeights[mid] || estimatedItemHeight;

        if (offset + height > scrollTop) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }

      return Math.max(0, left - overscan);
    }

    return 0;
  }

  function findEndIndex(startIdx, scrollTop, viewportHeight) {
    if (!mounted || !items.length) return 0;

    const viewportBottom = scrollTop + viewportHeight;

    for (let i = startIdx; i < items.length; i++) {
      const offset = offsetCache[i] || i * estimatedItemHeight;
      if (offset > viewportBottom) {
        return Math.min(items.length, i + overscan);
      }
    }
    return items.length;
  }

  function handleScroll() {
    if (!mounted || scrollScheduled) return;

    isScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      isScrolling = false;
    }, 150);

    scrollScheduled = true;
    requestAnimationFrame(() => {
      scrollScheduled = false;
      const scrollTop = viewport.scrollTop;
      const newStart = findStartIndex(scrollTop);
      const newEnd = findEndIndex(newStart, scrollTop, viewportHeight);

      if (start !== newStart || end !== newEnd) {
        start = newStart;
        end = newEnd;
      }
    });
  }

  function scrollToItem(index, behavior = 'smooth') {
    if (!mounted || index < 0 || index >= items.length) return;

    const targetOffset = getItemOffsetTop(index);
    viewport.scrollTo({
      top: targetOffset,
      behavior,
    });
  }

  onMount(() => {
    mounted = true;
  });

  $effect(() => {
    if (items.length && mounted) {
      itemHeights = Array(items.length).fill(0);
      totalHeight = items.length * estimatedItemHeight;
      start = 0;
      end = Math.min(items.length, overscan * 4);
    }
  });

  $effect(() => {
    if (viewportHeight > 0 && mounted) {
      const scrollTop = viewport?.scrollTop || 0;
      const newStart = findStartIndex(scrollTop);
      const newEnd = findEndIndex(newStart, scrollTop, viewportHeight);
      start = newStart;
      end = newEnd;
    }
  });

  $effect(() => {
    if (scrollToIndex !== undefined && mounted) {
      scrollToItem(scrollToIndex);
      scrollToIndex = undefined;
    }
  });
</script>

<virtual-scroll-viewport
  bind:this={viewport}
  bind:offsetHeight={viewportHeight}
  onscroll={handleScroll}
>
  <virtual-scroll-content>
    {#if topPadding > 0}
      <div style="height: {topPadding}px;"></div>
    {/if}
    {#each visibleItems as { index, item } (index)}
      <virtual-scroll-item use:measureHeight={{ index, updateItemHeight }}>
        {#if children}
          {@render children({ item, index })}
        {:else}
          <div>Item {index}</div>
        {/if}
      </virtual-scroll-item>
    {/each}
    {#if bottomPadding > 0}
      <div style="height: {bottomPadding}px;"></div>
    {/if}
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

  virtual-scroll-item {
    display: block;
    contain: layout style paint;
  }
</style>
