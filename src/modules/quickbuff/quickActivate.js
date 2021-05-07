import daQuickbuff from '../_dataAccess/daQuickbuff';
import quickbuffSuccess from '../common/quickbuffSuccess';
import sendEvent from '../analytics/sendEvent';
import setInnerHtml from '../dom/setInnerHtml';

function processResult(trigger, json) {
  if (quickbuffSuccess(json)) {
    // eslint-disable-next-line no-param-reassign
    trigger.className = 'fshLime';
    setInnerHtml('On', trigger);
  }
}

export default async function quickActivate(evt) { // jQuery.min
  const trigger = evt.target;
  if (trigger.className !== 'quickbuffActivate') { return; }
  sendEvent('quickbuff', 'quickActivate');
  const json = await daQuickbuff([window.self], [trigger.dataset.buffid]);
  processResult(trigger, json);
}
