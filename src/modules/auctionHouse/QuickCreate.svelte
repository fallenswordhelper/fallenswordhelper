<script>
import sendEvent from '../analytics/sendEvent';
import QuickSelectClasses from '../common/QuickSelectClasses.svelte';
</script>

<QuickSelectClasses
  on:perf={() => sendEvent('ahQuickCreate', 'doPerf')}
  on:select={(e) => sendEvent('ahQuickCreate', 'doSelect', e.detail)}
  on:toggle={() => sendEvent('ahQuickCreate', 'toggleSelectST')}
/>
