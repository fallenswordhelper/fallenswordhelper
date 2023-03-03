import arrayFrom from '../../../common/arrayFrom';
import jQueryPresent from '../../../common/jQueryPresent';
import getValue from '../../../system/getValue';
import CheckAll from './CheckAll.svelte';
import doFolderFilter from './doFolderFilter';
import doMoveItems from './doMoveItems';
import getCheckboxesVisible from './getCheckboxesVisible';
import getInv from './getInv';
import injectStoreItems from './injectStoreItems';

async function doFolders() {
  const inv = await getInv();
  if (!inv.folders) { return; }
  const [form] = document.forms;
  doFolderFilter(inv, form);
  doMoveItems(inv, form);
}

function doCheckAll() {
  getCheckboxesVisible()
    .forEach((ctx) => { ctx.checked = !ctx.disabled && !ctx.checked; });
}

function addCheckAll() {
  const submits = arrayFrom(document.forms[0]?.elements).filter((e) => e.type === 'submit');
  if (!submits.length) return;
  const checkAll = new CheckAll({
    anchor: submits[0],
    target: submits[0].parentNode,
  });
  checkAll.$on('checkall', doCheckAll);
}

export default function storeitems() {
  if (jQueryPresent() && getValue('enableFolderFilter')) { doFolders(); }
  addCheckAll();
  injectStoreItems();
}
