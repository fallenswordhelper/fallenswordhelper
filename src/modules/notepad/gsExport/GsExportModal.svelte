<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import GsExport from './GsExport.svelte';

  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('GS Export', 'close');
    visible = false;
  }
</script>

<ModalTitled {close} {visible}>
  {#snippet title()}
    Guild Store Export
  {/snippet}
  <GsExport />
</ModalTitled>
