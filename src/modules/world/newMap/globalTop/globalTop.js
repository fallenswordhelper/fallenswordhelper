import GlobalTop from './GlobalTop.svelte';
import daGlobalContrib from '../../../_dataAccess/daGlobalContrib';
import getElementById from '../../../common/getElementById';
import onclick from '../../../common/onclick';

let gt = 0;

const props = () => ({ promise: daGlobalContrib() });

function startApp(target) {
  if (!gt) {
    gt = new GlobalTop({
      props: props(),
      target,
    });
  } else {
    gt.$set(props());
  }
}

function show() {
  const worldEventContrib = getElementById('world-event-contrib');
  startApp(worldEventContrib);
  $(worldEventContrib).dialog({
    title: 'Top 100 Event Contributers',
    minWidth: 300,
    height: 300,
    zIndex: 9999,
  });
}

export default function globalTop() {
  const worldEventBadge = $('#world-event-badge');
  if (!worldEventBadge.length) { return; }
  worldEventBadge.off();
  onclick(worldEventBadge[0], show);
}
