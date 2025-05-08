<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import SuperElite from './SuperElite.svelte';

  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('SE Tracker', 'close');
    visible = false;
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Super Elite Tracker
  {/snippet}
  <SuperElite />
</ModalTitled>
