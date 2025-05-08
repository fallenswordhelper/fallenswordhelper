import { mount } from 'svelte';
import alert from './alert';
import Alert from './Alert.svelte';

let mounted = false;

function mountAlert() {
  if (!mounted) {
    mounted = true;
    mount(Alert, { target: document.body });
  }
}

export default function dynamicAlert(msg) {
  if (msg) {
    mountAlert();
    alert.set(msg);
  }
}
