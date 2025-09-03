<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import Molds from './Molds.svelte';

  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('Molds', 'Close');
    visible = false;
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Molds
  {/snippet}
  <Molds />
</ModalTitled>
