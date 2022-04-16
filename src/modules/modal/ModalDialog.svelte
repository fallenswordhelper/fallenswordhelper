<!-- uses bits of https://github.com/flekschas/svelte-simple-modal -->
<!-- uses bits of https://svelte.dev/repl/514f1335749a4eae9d34ad74dc277f20 -->

<script context="module">
	let onTop;
</script>

<script>
  import { createEventDispatcher } from 'svelte';
  import querySelectorArray from '../common/querySelectorArray';

  export let modal;
  export let visible = true;

  const dispatch = createEventDispatcher();
  const close = () => dispatch('close');

  $: modalVisible = visible;
  let previouslyFocused;
  let prevOnTop;

  function handleKeydown(e) {
    if (!visible) { return; }

    if (e.key === 'Escape' && onTop === modal) {
      close();
      return;
    }

    if (e.key === 'Tab') {
      const tabbable = querySelectorArray('*', modal).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  }

  $: if (modal && visible) {
    prevOnTop = onTop;
    onTop = modal;
  }

  $: if (modal && !visible) {
    onTop = prevOnTop;
  }

  $: if (visible) {
    previouslyFocused = document?.activeElement;
  } else {
    previouslyFocused?.focus();
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="ui-dialog" class:modalVisible role="dialog" aria-modal="true" bind:this={modal}>
  <slot></slot>
</div>

<style>
  div {
    border: 1px solid #d19405;
    border-radius: 4px;
    box-shadow: 0 0 10px #000;
    color: #383838;
    left: 50%;
    max-height: calc(100vh - 4em);
    overflow: auto;
    position: absolute;
    top: 32px;
    transform: translateX(-100vw);
  }

  .modalVisible {
    transform: translate(-50%);
  }
</style>
