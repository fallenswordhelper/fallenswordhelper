import { mount } from 'svelte';
import GuildLog from './GuildLog.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountGuildLog() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(GuildLog, { props, target: document.body });
  }
}
