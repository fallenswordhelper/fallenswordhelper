import FsBoxLog from './FsBoxLog.svelte';

const props = { visible: true };
let thisModal = 0;

export default function fsboxlog() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new FsBoxLog({ props, target: document.body });
  }
}
