import instantiate from '../../modal/instantiate';
import PotReport from './PotReport.svelte';

const props = { visible: true };
let thisModal = 0;

export default function potReport() {
  thisModal = instantiate(props, thisModal, PotReport);
}
