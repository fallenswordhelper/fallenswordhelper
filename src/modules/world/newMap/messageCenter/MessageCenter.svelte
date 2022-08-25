<script>
import isUndefined from '../../../common/isUndefined';
import Message from './Message.svelte';

/* eslint no-underscore-dangle: ["error", { "allow": ["_displayMessage", "_reposition"] }] */

let messages = [];
const mc = window.$('#messageCenter').data().hcsWorldMessageCenter;

function removeMessage(e) {
  messages = messages.filter((m) => m.e !== e.detail);
}

function updateMessages() {
  messages = messages;
}

function displayMessage(e, t, i = 3000) {
  const oldMessage = messages.find((m) => m.e === e);
  if (isUndefined(oldMessage)) {
    messages = [...messages, { e, t, i }];
  } else {
    oldMessage.ref.addCall(i);
  }
  mc._reposition();
}

mc._displayMessage = displayMessage;
</script>
{#each messages as message, i (message.e)}
<Message e={message.e} t={message.t} i={message.i}
    bind:this={message.ref}
    on:update={() => updateMessages()}
    on:remove={(e) => removeMessage(e)} />
{/each}
