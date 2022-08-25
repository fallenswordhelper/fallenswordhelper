<script>
import { fade } from 'svelte/transition';

let messages = [];
const mc = window.$('#messageCenter').data().hcsWorldMessageCenter;

function displayMessage(e, t, i = 3000) {
  const index = messages.findIndex((m) => m.e === e);
  if (index >= 0) {
    messages[index].c += 1;
    messages[index].n = Date.now() + i;
    messages = messages;
  } else {
    messages = [...messages, {
      e, i, t, c: 1, n: Date.now() + i,
    }];
  }
  // eslint-disable-next-line no-underscore-dangle
  mc._reposition();
}

// eslint-disable-next-line no-underscore-dangle
mc._displayMessage = displayMessage;

setInterval(() => {
  const indeces = messages.map((m, i) => ({ n: m.n, i }))
    .filter((m) => m.n < Date.now())
    .reverse();

  if (indeces) {
    indeces.forEach((m) => {
      messages.pop(m.i);
      messages = messages;
    });
    // eslint-disable-next-line no-underscore-dangle
    mc._reposition();
  }
}, 1000);
</script>
{#each Object.values(messages) as message (message.e)}
<p class="message {message.t}" out:fade>
    {@html message.e}
    {#if message.c > 1}
    <div class="count">x{message.c}</div>
    {/if}
</p>
{/each}
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
