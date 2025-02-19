<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTabbed from '../../modal/ModalTabbed.svelte';
  import QuickLinksManager from './QuickLinksManager.svelte';
  import QuickLinksRaw from './QuickLinksRaw.svelte';

  /**
   * @typedef {Object} Props
   * @property {boolean} [visible]
   */

  /** @type {Props} */
  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('Quick Links Manager', 'close');
    visible = false;
  }

  const tabs = [
    {
      component: QuickLinksManager,
      label: 'Quick Links',
    },
    {
      component: QuickLinksRaw,
      label: 'Raw Editor',
    },
  ];
</script>

<ModalTabbed on:close={close} {tabs} {visible} />
