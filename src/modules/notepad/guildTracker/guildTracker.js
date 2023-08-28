import instantiate from '../../modal/instantiate';
import GuildTrackerModal from './GuildTrackerModal.svelte';

const props = { visible: true };
let thisModal = 0;

export default function guildTracker() {
  thisModal = instantiate(props, thisModal, GuildTrackerModal);
}
