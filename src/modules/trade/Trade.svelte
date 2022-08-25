<script>
import sendEvent from '../analytics/sendEvent';
import QuickSelectClasses from '../common/QuickSelectClasses.svelte';
</script>

<QuickSelectClasses
  on:perf={() => sendEvent('Trade', 'doPerf')}
  on:select={(e) => sendEvent('Trade', 'doSelect', e.detail)}
  on:toggle={() => sendEvent('Trade', 'toggleSelectST')}
  wantsTagged=1
/>
