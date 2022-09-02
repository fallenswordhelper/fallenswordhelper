export default function jqueryEventTracker() {
  const test = 0;
  if (defineUserIsDev && test) { // eslint-disable-line no-undef
    const oldTrigger = $.fn.trigger;
    jQuery.fn.extend({
      trigger(event, data, ...rest) {
        if (event?.type && !event.type.startsWith('tooltip')) {
          // eslint-disable-next-line no-console
          console.log('jquery event:', event.type, event, data); // skipcq: JS-0002
        }
        return oldTrigger.call(this, event, data, ...rest);
      },
    });
  }
}
