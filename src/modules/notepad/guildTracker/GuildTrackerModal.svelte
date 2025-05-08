<script>
  import sendEvent from '../../analytics/sendEvent';
  import ModalTabbed from '../../modal/ModalTabbed.svelte';
  import GuildTracker from './GuildTracker.svelte';
  import Utils from './Utils.svelte';

  let { visible = $bindable(true) } = $props();

  function close() {
    sendEvent('Guild Tracker', 'close');
    visible = false;
  }

  const tabs = [
    {
      component: GuildTracker,
      label: 'Guild Tracker',
    },
    {
      component: Utils,
      label: 'Import/Export',
    },
  ];
</script>

<ModalTabbed {close} {tabs} {visible} />
