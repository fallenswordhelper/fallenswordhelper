<script>
  import { onDestroy } from 'svelte';
  import { fly } from 'svelte/transition';
  import alert from './alert';

  export let ms = 3000;
  let visible = false;
  let timeout = 0;
  let transform = '';

  async function showMsg() {
    const vvp = window.visualViewport;
    const offsetLeft = (vvp.offsetLeft + vvp.width) - window.innerWidth;
    transform = `translate(${offsetLeft}px, ${vvp.offsetTop}px)`;
    visible = true;
  }

  const onMessageChange = (message, mms) => {
    clearTimeout(timeout);
    if (!message) { // hide Alert if message is empty
      visible = false;
    } else {
      showMsg(); // show alert
      // and hide it after ms milliseconds
      if (mms > 0) {
        timeout = setTimeout(() => {
          visible = false;
          $alert = '';
        }, mms);
      }
    }
  };

  // whenever the alert store or the ms props changes run onMessageChange
  $: onMessageChange($alert, ms);

  onDestroy(() => clearTimeout(timeout)); // make sure we clean-up the timeout
</script>

{#if visible}
  <div role="alert" on:click="{() => { visible = false; }}" transition:fly="{{
    delay: 250, duration: 300, x: 0, y: -100, opacity: 0.5,
  }}" style:transform>
    <p>{ $alert }</p>
  </div>
{/if}

<style>
div {
  align-items: center;
  background-color: #565656;
  border-radius: 0.2rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 0.875rem;
  font-weight: 700;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-top: 1rem;
  opacity: 95%;
  padding: 0.5rem 1.4rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
}
div p {
  color: #fff;
}
</style>
