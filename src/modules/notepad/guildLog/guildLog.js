import instantiate from '../../modal/instantiate';
import GuildLog from './GuildLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function reliclist() {
  thisModal = instantiate(props, thisModal, GuildLog);
}
