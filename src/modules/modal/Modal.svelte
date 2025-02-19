<script>
  import { run } from 'svelte/legacy';

  import { createEventDispatcher } from 'svelte';
  import calf from '../support/calf';
  import ModalBackground from './ModalBackground.svelte';
  import ModalDialog from './ModalDialog.svelte';

  /**
   * @typedef {Object} Props
   * @property {any} modal
   * @property {boolean} [visible]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { modal = $bindable(), visible = true, children } = $props();

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

  run(() => {
    if (visible) {
      replaceDialogIsClosed();
    } else {
      restoreDialogIsClosed();
    }
  });
</script>

<ModalBackground {visible} on:click={close}>
  <ModalDialog {visible} on:close bind:modal>
    {@render children?.()}
  </ModalDialog>
</ModalBackground>
