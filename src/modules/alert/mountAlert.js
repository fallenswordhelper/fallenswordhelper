import Alert from './Alert.svelte';

let mounted;

export default function mountAlert() {
  if (!mounted) {
    mounted = true;
    return new Alert({ target: document.body });
  }
}
