import './whosGotWhat.css';
import instantiate from '../../modal/instantiate';
import WhosGotWhat from './WhosGotWhat.svelte';

const props = { visible: true };
let thisModal = 0;

export default function whosGotWhat() {
  thisModal = instantiate(props, thisModal, WhosGotWhat);
}
