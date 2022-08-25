<script>
import { createEventDispatcher } from 'svelte';
import { fade } from 'svelte/transition';

const dispatch = createEventDispatcher();

export let e;
export let t;
export let i;
let c = 1;

function startCountdown(duration = 3000) {
  return setTimeout(() => {
    c -= 1;
    if (c > 0) {
      dispatch('update', c);
    } else {
      dispatch('remove', e);
    }
  }, duration);
}

export function addCall(newI = 3000) {
  c += 1;
  startCountdown(newI);
}

startCountdown(i);
</script>
<p class="message {t}" out:fade>
    {@html e}
    {#if c > 1}
    <div class="count">x{c}</div>
    {/if}
</p>
<style>
.message .count {
    position: absolute;
    top: -6px;
    left: -10px;
    border-radius: 100%;
    background: #fff;
    padding: 4px;
    box-shadow: 0px 0px 10px #000;
    border: 1px solid gray;
    font-size: smaller;
    color: black;
    text-shadow: none;
}
.message {
    position: relative;
}
</style>
