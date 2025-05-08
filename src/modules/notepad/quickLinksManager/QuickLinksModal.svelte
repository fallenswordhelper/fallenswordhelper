<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTabbed from '../../modal/ModalTabbed.svelte';
  import QuickLinksManager from './QuickLinksManager.svelte';
  import QuickLinksRaw from './QuickLinksRaw.svelte';

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

<ModalTabbed {close} {tabs} {visible} />
