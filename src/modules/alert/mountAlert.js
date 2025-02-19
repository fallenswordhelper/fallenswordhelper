import { mount } from 'svelte';
import Alert from './Alert.svelte';

let mounted;

export default function mountAlert() {
  if (!mounted) {
    mounted = true;
    return mount(Alert, { target: document.body });
  }
}
