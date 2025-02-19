import GuildLog from './GuildLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function reliclist() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new GuildLog({ props, target: document.body });
  }
}
