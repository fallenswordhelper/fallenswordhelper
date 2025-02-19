import GuildTrackerModal from './GuildTrackerModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function guildTracker() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new GuildTrackerModal({ props, target: document.body });
  }
}
