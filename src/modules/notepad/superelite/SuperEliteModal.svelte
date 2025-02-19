<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTitled from '../../modal/ModalTitled.svelte';
  import SuperElite from './SuperElite.svelte';

  /**
   * @typedef {Object} Props
   * @property {boolean} [visible]
   */

  /** @type {Props} */
  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('SE Tracker', 'close');
    visible = false;
  }
</script>

<ModalTitled {visible} on:close={close}>
  {#snippet title()}
    Super Elite Tracker
  {/snippet}
  <SuperElite />
</ModalTitled>
