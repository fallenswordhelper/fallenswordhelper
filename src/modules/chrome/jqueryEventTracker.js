import devStdOut from '../support/devStdOut';

const weWantEvent = (event) => event?.type && !event.type.startsWith('tooltip');

function logJqueryEvent() {
  const oldTrigger = $.fn.trigger;
  jQuery.fn.extend({
    trigger(event, data, ...rest) {
      if (weWantEvent(event)) devStdOut('jquery event:', event.type, event, data);
      return oldTrigger.call(this, event, data, ...rest);
    },
  });
}

export default function jqueryEventTracker() {
  const dev = 0;
  if (defineUserIsDev && dev) logJqueryEvent();
}
