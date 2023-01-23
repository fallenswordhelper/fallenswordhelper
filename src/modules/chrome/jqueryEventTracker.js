const weWantEvent = (event) => event?.type && !event.type.startsWith('tooltip');

function logJqueryEvent() {
  const oldTrigger = $.fn.trigger;
  jQuery.fn.extend({
    trigger(event, data, ...rest) {
      if (weWantEvent(event)) {
        // eslint-disable-next-line no-console
        console.log('jquery event:', event.type, event, data); // skipcq: JS-0002
      }
      return oldTrigger.call(this, event, data, ...rest);
    },
  });
}

export default function jqueryEventTracker() {
  const test = 0;
  // eslint-disable-next-line no-undef
  if (defineUserIsDev && test) logJqueryEvent();
}
