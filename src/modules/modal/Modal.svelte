<script>
  import { createEventDispatcher } from 'svelte';
  import calf from '../support/calf';
  import ModalBackground from './ModalBackground.svelte';
  import ModalDialog from './ModalDialog.svelte';

  export let modal;
  export let visible = true;

  export let center = true;
  export let left = '50%';
  export let top = '32px';

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  let oldDialogIsClosed;

  function replaceDialogIsClosed() {
    if (calf.dialogIsClosed) {
      oldDialogIsClosed = calf.dialogIsClosed;
    }
    calf.dialogIsClosed = () => !visible;
  }

  function restoreDialogIsClosed() {
    if (oldDialogIsClosed) {
      calf.dialogIsClosed = oldDialogIsClosed;
    }
  }

  $: {
    if (visible) {
      replaceDialogIsClosed();
    } else {
      restoreDialogIsClosed();
    }
  }
</script>

<ModalBackground { visible } on:click={ close }>
  <ModalDialog { visible } { center } { left } { top } on:close bind:modal>
    <slot />
  </ModalDialog>
</ModalBackground>
