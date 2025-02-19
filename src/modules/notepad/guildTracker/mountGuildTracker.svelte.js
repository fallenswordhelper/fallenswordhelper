import { mount } from 'svelte';
import GuildTrackerModal from './GuildTrackerModal.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountGuildTracker() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(GuildTrackerModal, { props, target: document.body });
  }
}
