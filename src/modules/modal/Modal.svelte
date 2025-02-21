<script>
  import calf from '../support/calf';
  import ModalBackground from './ModalBackground.svelte';
  import ModalDialog from './ModalDialog.svelte';

  let { close, children, modal = $bindable(), visible = true } = $props();

  let oldDialogIsClosed;

  $effect(() => {
    if (visible) {
      if (calf.dialogIsClosed) {
        oldDialogIsClosed = calf.dialogIsClosed;
      }
      calf.dialogIsClosed = () => !visible;
    } else {
      if (oldDialogIsClosed) {
        calf.dialogIsClosed = oldDialogIsClosed;
      }
    }
  });
</script>

<ModalBackground {close} {visible}>
  <ModalDialog bind:modal {close} {visible}>
    {@render children?.()}
  </ModalDialog>
</ModalBackground>
