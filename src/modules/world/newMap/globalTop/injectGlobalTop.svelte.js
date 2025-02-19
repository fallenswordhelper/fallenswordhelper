import { mount } from 'svelte';
import daGlobalContrib from '../../../_dataAccess/daGlobalContrib';
import sendEvent from '../../../analytics/sendEvent';
import getElementById from '../../../common/getElementById';
import onclick from '../../../common/onclick';
import GlobalTop from './GlobalTop.svelte';

const props = $state();
let gt = 0;

function startApp(target) {
  props.promise = daGlobalContrib();
  if (!gt) gt = mount(GlobalTop, { props, target });
}

function show() {
  sendEvent('NewMap', 'GlobalTop');
  const worldEventContrib = getElementById('world-event-contrib');
  startApp(worldEventContrib);
  globalThis.$(worldEventContrib).dialog({
    title: 'Top 100 Event Contributers',
    minWidth: 300,
    height: 300,
    zIndex: 9999,
  });
}

export default function injectGlobalTop() {
  const worldEventBadge = globalThis.$('#world-event-badge');
  if (!worldEventBadge.length) return;
  worldEventBadge.off();
  onclick(worldEventBadge[0], show);
}
