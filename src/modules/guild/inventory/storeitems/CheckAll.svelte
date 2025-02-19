<script>
  import sendEvent from '../../../analytics/sendEvent';

  const { dispatchCheckAll } = $props();

  function doCheckAll() {
    sendEvent('storeitems', 'Check All');
    dispatchCheckAll();
  }
</script>

<button class="custombutton" onclick={doCheckAll} type="button">
  Check All
</button>&nbsp;

<style>
  button {
    font-family: inherit;
    font-size: inherit;
  }
</style>
