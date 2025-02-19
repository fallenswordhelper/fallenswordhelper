import './whosGotWhat.css';
import WhosGotWhat from './WhosGotWhat.svelte';

const props = { visible: true };
let thisModal = 0;

export default function whosGotWhat() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new WhosGotWhat({ props, target: document.body });
  }
}
