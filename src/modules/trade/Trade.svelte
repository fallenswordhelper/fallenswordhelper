<script>
  import sendEvent from '../analytics/sendEvent';
  import clickThis from '../common/clickThis';
  import getElementById from '../common/getElementById';
  import QuickSelectClasses from '../common/QuickSelectClasses.svelte';

  function sendBtn() {
    sendEvent('Trade', 'doSend');
    clickThis(getElementById('send-items'));
  }
</script>

{#if getElementById('send-items')}
  <div>
    <button class="custombutton" onclick={sendBtn} type="button">Send</button>
  </div>
{/if}

<QuickSelectClasses
  dispatchPerf={() => sendEvent('Trade', 'doPerf')}
  dispatchSelect={(itemId) => sendEvent('Trade', 'doSelect', itemId)}
  dispatchToggle={() => sendEvent('Trade', 'toggleSelectST')}
  wantsTagged="1"
/>

<style>
  div {
    margin: 10px auto 10px auto;
    text-align: center;
  }
  button {
    font-size: 12px;
    font-family: Helvetica, Arial, sans-serif;
    width: 100px;
  }
</style>
