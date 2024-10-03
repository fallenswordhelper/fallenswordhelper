import daQuickbuff from '../_dataAccess/daQuickbuff';
import sendEvent from '../analytics/sendEvent';
import playerName from '../common/playerName';
import quickbuffSuccess from '../common/quickbuffSuccess';
import setInnerHtml from '../dom/setInnerHtml';

function processResult(trigger, json) {
  if (quickbuffSuccess(json)) {
    trigger.className = 'fshLime';
    setInnerHtml('On', trigger);
  }
}

export default async function quickActivate(evt) {
  // jQuery.min
  const trigger = evt.target;
  if (trigger.className !== 'quickbuffActivate') {
    return;
  }
  sendEvent('quickbuff', 'quickActivate');
  const json = await daQuickbuff([playerName()], [trigger.dataset.buffid]);
  processResult(trigger, json);
}
