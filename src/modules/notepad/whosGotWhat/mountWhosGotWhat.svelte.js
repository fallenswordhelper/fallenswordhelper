import './whosGotWhat.css';
import { mount } from 'svelte';
import WhosGotWhat from './WhosGotWhat.svelte';

const props = $state({ visible: true });
let thisModal = 0;

export default function mountWhosGotWhat() {
  if (thisModal) {
    props.visible = true;
  } else {
    thisModal = mount(WhosGotWhat, { props, target: document.body });
  }
}
