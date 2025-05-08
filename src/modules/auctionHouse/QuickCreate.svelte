<script>
  import sendEvent from '../analytics/sendEvent';
  import QuickSelectClasses from '../common/QuickSelectClasses.svelte';
</script>

<QuickSelectClasses
  dispatchPerf={() => sendEvent('ahQuickCreate', 'doPerf')}
  dispatchSelect={(itemId) => sendEvent('ahQuickCreate', 'doSelect', itemId)}
  dispatchToggle={() => sendEvent('ahQuickCreate', 'toggleSelectST')}
/>
