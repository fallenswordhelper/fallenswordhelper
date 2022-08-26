<script>
import { createEventDispatcher } from 'svelte';
import { scale } from 'svelte/transition';

const dispatch = createEventDispatcher();

export let e;
export let t;
export let i;
let c = 1;
let p;
const timers = [];

function dispatchRemove() {
  timers.forEach((id) => clearInterval(id));
  c = 0;
  p.classList.add('fade');
  p.addEventListener('transitionend', () => { dispatch('remove', e); }, false);
}

function startCountdown(duration = 3000) {
  timers.push(setTimeout(() => {
    c -= 1;
    if (c > 0) {
      dispatch('update', c);
    } else {
      dispatchRemove();
    }
  }, duration));
}

export function addCall(newI = 3000) {
  c += 1;
  startCountdown(newI);
}

startCountdown(i);
</script>
<p class="fsh-message {t}" bind:this={p} on:click={dispatchRemove}>
    {@html e}
    {#if c > 1}
    <div class="count" in:scale out:scale>x{c}</div>
    {/if}
</p>
<style>
.fsh-message .count {
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
.fsh-message {
    position: relative;
    background: rgba(0,0,0,.9);
    text-align: center;
    margin-top: 4px;
    padding: 4px 2px;
    border-radius: 4px;
    transition: opacity 0.6s;
}
.fade { opacity: 0; }
</style>
