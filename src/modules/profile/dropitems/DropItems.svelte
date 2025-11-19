<script>
  import sendEvent from "../../analytics/sendEvent";
  import QuickSelectClasses from '../../common/QuickSelectClasses.svelte';
</script>

<QuickSelectClasses
  dispatchPerf={() => sendEvent('drop-items', 'doPerf')}
  dispatchSelect={(itemId) => sendEvent('drop-items', 'doSelect', itemId)}
  dispatchToggle={() => sendEvent('drop-items', 'toggleSelectST')}
/>
