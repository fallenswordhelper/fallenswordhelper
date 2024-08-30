import arrayFrom from '../../../common/arrayFrom';
import jQueryNotPresent from '../../../common/jQueryNotPresent';
import getValue from '../../../system/getValue';
import CheckAll from './CheckAll.svelte';
import doFolderFilter from './doFolderFilter';
import doMoveItems from './doMoveItems';
import getCheckboxesVisible from './getCheckboxesVisible';
import getInv from './getInv';
import injectStoreItems from './injectStoreItems';

async function doFolders(form) {
  if (!getValue('enableFolderFilter')) return;
  const inv = await getInv();
  if (!inv?.folders) return;
  doFolderFilter(inv, form);
  doMoveItems(inv, form);
}

function doCheckAll() {
  getCheckboxesVisible()
    .forEach((ctx) => { ctx.checked = !ctx.disabled && !ctx.checked; });
}

function addCheckAll(form) {
  const { elements } = form;
  if (!elements?.length) return;
  const [submitButton] = arrayFrom(elements).filter((e) => e.type === 'submit');
  if (!submitButton) return;
  const checkAll = new CheckAll({
    anchor: submitButton,
    target: submitButton.parentNode,
  });
  checkAll.$on('checkall', doCheckAll);
}

export default function storeitems() {
  if (jQueryNotPresent()) return;
  const [form] = document.forms;
  if (!form) return;
  doFolders(form);
  addCheckAll(form);
  injectStoreItems();
}
