import { showExtraLinks, showQuickDropLinks } from './constants';
import getCheckboxesVisible from './getCheckboxesVisible';
import getInv from './getInv';
import ToggleButtons from './ToggleButtons.svelte';
import updateDomItems from './updateDomItems';
import { mount } from 'svelte';

async function doSelectLocked() {
  const visibleCheckboxes = getCheckboxesVisible();
  if (!visibleCheckboxes.length) return;
  const inv = await getInv();
  if (!inv.items) return;
  visibleCheckboxes
    .map((cb) => [cb, inv.items[cb.value]])
    .filter(([, invItem]) => invItem)
    .forEach(([e, invItem]) => {
      e.checked = !e.disabled && invItem.guild_tag !== -1;
    });
}

function handleExtraLinks(ctx) {
  return function doExtraLinks(pref) {
    ctx[showExtraLinks] = pref;
    updateDomItems(ctx);
  };
}

function handleDropLinks(ctx) {
  return function doDropLinks(pref) {
    ctx[showQuickDropLinks] = pref;
    updateDomItems(ctx);
  };
}

export default function doToggleButtons(ctx) {
  const [form] = document.forms;
  mount(ToggleButtons, {
    props: {
      doDropLinks: handleDropLinks(ctx),
      doExtraLinks: handleExtraLinks(ctx),
      doSelectLocked,
      showExtraLinks: ctx[showExtraLinks],
      showQuickDropLinks: ctx[showQuickDropLinks],
    },
    target: form.parentNode.children[5].children[0],
  });
}
