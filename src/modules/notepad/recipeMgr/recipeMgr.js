import RecipeMgr from './RecipeMgr.svelte';

const props = { visible: true };
let thisModal = 0;

export default function recipeMgr() {
  if (thisModal) {
    thisModal.$set(props);
  } else {
    thisModal = new RecipeMgr({ props, target: document.body });
  }
}
