import SetMgr from './SetMgr.svelte';

const props = { visible: true };
let thisModal = 0;

export default function setmgr() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new SetMgr({ props, target: document.body });
  }
}
