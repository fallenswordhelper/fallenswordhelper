<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import SuperElite from './SuperElite.svelte';

  export let visible = true;

  function close() {
    sendEvent('SE Tracker', 'close');
    visible = false;
  }
</script>

<ModalTitled { visible } on:close={ close }>
  <svelte:fragment slot="title">Super Elite Tracker</svelte:fragment>
  <SuperElite/>
</ModalTitled>
