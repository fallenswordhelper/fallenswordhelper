<!-- uses bits of https://github.com/flekschas/svelte-simple-modal -->
<!-- uses bits of https://svelte.dev/repl/514f1335749a4eae9d34ad74dc277f20 -->

<script module>
  let onTop;
</script>

<script>
  import querySelectorArray from '../common/querySelectorArray';

  let { close, children, modal = $bindable(), visible = true } = $props();

  let modalVisible = $derived(visible);
  let previouslyFocused = $state();
  let prevOnTop = $state();

  const liveTab = (n) =>
    n.tabIndex >= 0 && n.offsetWidth > 0 && n.offsetHeight > 0 && !n.disabled;

  function handleKeydown(e) {
    if (!visible) {
      return;
    }

    if (e.key === 'Escape' && onTop === modal) {
      close();
      return;
    }

    if (e.key === 'Tab') {
      const tabbable = querySelectorArray('*', modal).filter(liveTab);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  }

  $effect(() => {
    if (visible) {
      previouslyFocused = document?.activeElement;
      if (modal) {
        prevOnTop = onTop;
        onTop = modal;
      }
    } else {
      previouslyFocused?.focus();
      if (modal) {
        onTop = prevOnTop;
      }
    }
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<div
  class="ui-dialog"
  class:modalVisible
  role="dialog"
  aria-modal="true"
  bind:this={modal}
>
  {@render children?.()}
</div>

<style>
  div {
    border: 1px solid #d19405;
    border-radius: 4px;
    box-shadow: 0 0 10px #000;
    color: #383838;
    font-size: 13px;
    left: 50%;
    max-height: calc(100vh - 4em);
    overflow: auto;
    position: absolute;
    top: 32px;
    transform: translateX(-1000vw);
  }

  .modalVisible {
    transform: translate(-50%);
  }
</style>
