import GlobalTop from './GlobalTop.svelte';
import daTopRated from '../../../_dataAccess/daTopRated';
import getElementById from '../../../common/getElementById';
import onclick from '../../../common/onclick';

let gt;

const props = () => ({ promise: daTopRated('globalquest') });

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
